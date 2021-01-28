import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "spiel-form",
  styleUrls: ["../forms.scss"],
  templateUrl: "./spiel-form.component.html",
})
export class SpielFormComponent implements OnInit {
  spielForm: FormGroup;

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.spielForm = this.fb.group({
      kommandant: ["", Validators.required],
      runden: ["", Validators.required],
      seite: ["", Validators.required],
      karte: ["", Validators.required],
    });
  }

  onSubmit() {
    this.spielForm.markAsDirty();
    if (this.spielForm.valid) this.next.emit();
  }

  onPrevious() {
    this.previous.emit();
  }
}
