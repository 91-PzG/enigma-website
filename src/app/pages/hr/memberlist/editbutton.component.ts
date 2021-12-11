import { Component, Input } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { Member } from "../../../@core/data";
import { MemberEditDialogComponent } from "./member-edit-dialog/member-edit-dialog.component";

@Component({ template: `<button (click)="openDialogue()">Edit</button>` })
export class EditButtonComponent {
  @Input() value: Member;

  constructor(private dialogService: NbDialogService) {}

  openDialogue() {
    const dialogRef = this.dialogService.open(MemberEditDialogComponent, {});
    dialogRef.componentRef.instance.setMember(this.value);
  }
}
