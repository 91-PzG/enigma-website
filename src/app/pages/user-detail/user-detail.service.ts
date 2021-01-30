import { Injectable } from "@angular/core";
import { NbDialogRef, NbDialogService } from "@nebular/theme";
import { UserDetailComponent } from "./user-detail-component/user-detail.component";

@Injectable()
export class UserDetailService {
  dialogRef: NbDialogRef<any>;
  constructor(private dialogService: NbDialogService) {}

  openDialog() {
    const dialogRef = this.dialogService.open(UserDetailComponent, {
      closeOnBackdropClick: false,
      closeOnEsc: false,
    });
  }
}
