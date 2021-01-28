import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "info-form",
  styleUrls: ["../forms.scss"],
  templateUrl: "./info-form.component.html",
})
export class InfoFormComponent implements OnInit {
  infoForm: FormGroup;

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      serverName: ["", Validators.required],
      password: ["", Validators.required],
      treffpunkt: ["", Validators.required],
      spielerzahl: ["", Validators.required],
      anmeldefrist: ["", Validators.required],
    });
  }

  onSubmit() {
    this.infoForm.markAsDirty();
    console.log(this.infoForm.value);
    if (this.infoForm.valid) this.next.emit();
  }

  onPrevious() {
    this.previous.emit();
  }
}
