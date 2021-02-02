import { Component } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  templateUrl: "./create-squad.component.html",
  styleUrls: ["./create-squad.component.scss"],
})
export class CreateSquadComponent {
  constructor(protected ref: NbDialogRef<CreateSquadComponent>) {}
  cancel() {
    this.ref.close();
  }

  submit(name: string) {
    this.ref.close(name);
  }
}
