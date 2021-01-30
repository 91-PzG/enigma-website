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
  HLLFaction,
  HLLFactionData,
  HLLMap,
  HLLMapData,
  MemberAutocomplete,
  MemberAutocompleteData,
} from "../../../../@core/data";

export type GameForm = {
  kommandant: string;
  runden: number;
  karte: string;
  seite: string;
};

@Component({
  selector: "spiel-form",
  styleUrls: ["../forms.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./spiel-form.component.html",
})
export class SpielFormComponent implements OnInit {
  spielForm: FormGroup;
  maps: HLLMap[] = [];
  factions: HLLFaction[] = [];

  private memberList: MemberAutocomplete[] = [];
  filteredMembers$: Observable<MemberAutocomplete[]>;

  @ViewChild("autoInput") input;

  @Output() next = new EventEmitter<GameForm>();
  @Output() previous = new EventEmitter<void>();

  constructor(
    private fb: FormBuilder,
    mapService: HLLMapData,
    factionService: HLLFactionData,
    memberService: MemberAutocompleteData
  ) {
    mapService.getData().subscribe((maps) => {
      this.maps = maps;
    });
    factionService.getData().subscribe((factions) => {
      this.factions = factions;
    });
    memberService.getData().subscribe((members) => {
      this.memberList = members;
      this.filteredMembers$ = of(this.memberList);
    });
  }

  ngOnInit(): void {
    this.spielForm = this.fb.group({
      kommandant: ["", Validators.required],
      runden: ["", Validators.required],
      seite: ["", Validators.required],
      karte: ["", Validators.required],
    });
  }

  private filter(value: string): MemberAutocomplete[] {
    const filterValue = value.toLowerCase();
    return this.memberList.filter((optionValue) =>
      optionValue.username.toLowerCase().includes(filterValue)
    );
  }

  getFilteredOptions(value: string): Observable<MemberAutocomplete[]> {
    return of(value).pipe(map((filterString) => this.filter(filterString)));
  }

  onChange() {
    this.filteredMembers$ = this.getFilteredOptions(
      this.input.nativeElement.value
    );
  }

  onSelectionChange($event) {
    this.filteredMembers$ = this.getFilteredOptions($event);
  }

  onSubmit() {
    this.spielForm.markAsDirty();
    if (this.spielForm.valid) {
      const dto: GameForm = {
        kommandant: this.spielForm.controls["kommandant"].value,
        runden: this.spielForm.controls["runden"].value,
        karte: this.spielForm.controls["karte"].value,
        seite: this.spielForm.controls["seite"].value,
      };
      this.next.emit(dto);
    }
  }

  onPrevious() {
    this.previous.emit();
  }
}
