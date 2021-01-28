import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "overview-form",
  styleUrls: ["../forms.scss"],
  templateUrl: "./overview-form.component.html",
})
export class OverviewFormComponent implements OnInit {
  overviewForm: FormGroup;

  @Output() next = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.overviewForm = this.fb.group({
      eventName: ["", Validators.required],
      beschreibung: ["", Validators.required],
      datum: ["", Validators.required],
      anmeldefrist: ["", Validators.required],
      organisator: ["", Validators.required],
    });
  }

  onSubmit() {
    this.overviewForm.markAsDirty();
    if (this.overviewForm.valid) this.next.emit();
  }
}
