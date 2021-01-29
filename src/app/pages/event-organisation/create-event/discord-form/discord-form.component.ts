import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import {
  EventChannel,
  EventchannelData,
} from "../../../../@core/data/event-channel";

export type DiscordForm = {
  verpflichtend: boolean;
  sendToDiscord: boolean;
  channel: {
    id?: string;
    name: string;
  };
};

@Component({
  selector: "discord-form",
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ["../forms.scss", "./discord-form.component.scss"],
  templateUrl: "./discord-form.component.html",
})
export class DiscordComponent implements OnInit {
  discordForm: FormGroup;
  isVerpflichtend = false;
  isSentToDiscord = false;

  private eventChannels: EventChannel[] = [];
  filteredChannels$: Observable<EventChannel[]>;

  @ViewChild("autoInput") input;

  @Output() next = new EventEmitter<DiscordForm>();
  @Output() previous = new EventEmitter<void>();

  constructor(private fb: FormBuilder, service: EventchannelData) {
    service.getData().subscribe((channels) => {
      this.eventChannels = channels;
      this.filteredChannels$ = of(this.eventChannels);
    });
  }

  ngOnInit(): void {
    this.discordForm = this.fb.group({
      channel: [""],
    });
  }

  private filter(value: string): EventChannel[] {
    const filterValue = value.toLowerCase();
    return this.eventChannels.filter((optionValue) =>
      optionValue.name.toLowerCase().includes(filterValue)
    );
  }

  getFilteredOptions(value: string): Observable<EventChannel[]> {
    return of(value).pipe(map((filterString) => this.filter(filterString)));
  }

  onChange() {
    this.filteredChannels$ = this.getFilteredOptions(
      this.input.nativeElement.value
    );
  }

  onSelectionChange($event) {
    this.filteredChannels$ = this.getFilteredOptions($event);
  }

  onSubmit() {
    this.discordForm.markAsDirty();
    console.log(this.discordForm.status);
    if (this.discordForm.valid) {
      const channelId = this.eventChannels.find(
        (find) => find.name == this.discordForm.controls["channel"].value
      );
      const dto: DiscordForm = {
        verpflichtend: this.isVerpflichtend,
        sendToDiscord: this.isSentToDiscord,
        channel: {
          id: channelId ? channelId.id : null,
          name: this.discordForm.controls["channel"].value,
        },
      };
      this.next.emit(dto);
    }
  }

  onPrevious() {
    this.previous.emit();
  }

  toggleDiscord(checked: boolean) {
    this.isSentToDiscord = checked;
    if (this.isSentToDiscord) {
      this.discordForm.controls["channel"].setValidators(Validators.required);
    } else {
      this.discordForm.controls["channel"].clearValidators();
    }
    this.discordForm.controls["channel"].updateValueAndValidity();
  }
}
