import { Component } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "user-detail-component",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent {
  constructor(protected dialogRef: NbDialogRef<UserDetailComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
