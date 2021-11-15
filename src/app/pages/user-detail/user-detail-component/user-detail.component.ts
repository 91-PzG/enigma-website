import { Component } from "@angular/core";
import { NbDialogRef } from "@nebular/theme";
import { User, UserService } from "../../../@core/data";

@Component({
  selector: "user-detail-component",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent {
  user: User;

  constructor(
    protected dialogRef: NbDialogRef<UserDetailComponent>,
    private userData: UserService
  ) {
    userData.getData().then((user) => {
      this.user = user;
    });
  }

  close() {
    this.dialogRef.close();
  }
}
