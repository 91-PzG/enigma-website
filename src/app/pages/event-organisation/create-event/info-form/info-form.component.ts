import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export type InfoForm = {
  treffpunkt: string;
  server: string;
  passwort: string;
  spielerzahl: number;
  vorbesprechung: Date;
};

@Component({
  selector: "info-form",
  styleUrls: ["../forms.scss"],
  templateUrl: "./info-form.component.html",
})
export class InfoFormComponent implements OnInit {
  infoForm: FormGroup;

  @Output() next = new EventEmitter<InfoForm>();
  @Output() previous = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      serverName: ["", Validators.required],
      password: ["", Validators.required],
      treffpunkt: ["", Validators.required],
      spielerzahl: ["", Validators.required],
      vorbesprechung: ["", Validators.required],
    });
  }

  onSubmit() {
    this.infoForm.markAsDirty();
    if (this.infoForm.valid) {
      const dto: InfoForm = {
        treffpunkt: this.infoForm.controls["treffpunkt"].value,
        server: this.infoForm.controls["serverName"].value,
        passwort: this.infoForm.controls["password"].value,
        spielerzahl: this.infoForm.controls["spielerzahl"].value,
        vorbesprechung: this.infoForm.controls["vorbesprechung"].value,
      };
      this.next.emit(dto);
    }
  }

  onPrevious() {
    this.previous.emit();
  }
}
