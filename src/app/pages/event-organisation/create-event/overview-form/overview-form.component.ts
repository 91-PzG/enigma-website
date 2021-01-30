import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import {
  MemberAutocomplete,
  MemberAutocompleteData,
} from "../../../../@core/data";

export type OverviewForm = {
  name: string;
  datum: Date;
  beschreibung: string;
  anmeldefrist: Date;
  organisator: string;
};

@Component({
  selector: "overview-form",
  styleUrls: ["../forms.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./overview-form.component.html",
})
export class OverviewFormComponent implements OnInit {
  overviewForm: FormGroup;

  private memberList: MemberAutocomplete[] = [];
  filteredMembers$: Observable<MemberAutocomplete[]>;

  @ViewChild("autoInput") input;

  @Output() next = new EventEmitter<OverviewForm>();

  constructor(private fb: FormBuilder, service: MemberAutocompleteData) {
    service.getData().subscribe((members) => {
      this.memberList = members;
      this.filteredMembers$ = of(this.memberList);
    });
  }

  ngOnInit(): void {
    this.overviewForm = this.fb.group({
      eventName: ["", Validators.required],
      beschreibung: ["", Validators.required],
      datum: ["", Validators.required],
      anmeldefrist: ["", Validators.required],
      organisator: ["", [Validators.required, this.isMemberValidator()]],
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
    this.overviewForm.markAsDirty();

    if (this.overviewForm.valid) {
      const dto: OverviewForm = {
        name: this.overviewForm.controls["eventName"].value,
        beschreibung: this.overviewForm.controls["beschreibung"].value,
        datum: this.overviewForm.controls["datum"].value,
        anmeldefrist: this.overviewForm.controls["anmeldefrist"].value,
        organisator: this.memberList.find(
          (find) =>
            find.username == this.overviewForm.controls["organisator"].value
        ).id,
      };
      console.log(dto);
      this.next.emit(dto);
    }
  }

  isMemberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this.memberList.map((m) => m.username).includes(control.value)
        ? null
        : { isNotMember: { value: control.value } };
    };
  }
}
