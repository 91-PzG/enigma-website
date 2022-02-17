import { Component, Input } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { MemberListDto } from "../../../@core/data";
import { MemberEditDialogComponent } from "./member-edit-dialog/member-edit-dialog.component";

@Component({ template: `<button (click)="openDialogue()">Edit</button>` })
export class EditButtonComponent {
  @Input() value: MemberListDto;

  constructor(private dialogService: NbDialogService) {}

  openDialogue() {
    const dialogRef = this.dialogService.open(MemberEditDialogComponent, {});
    dialogRef.componentRef.instance.setMember(this.value);
  }
}
