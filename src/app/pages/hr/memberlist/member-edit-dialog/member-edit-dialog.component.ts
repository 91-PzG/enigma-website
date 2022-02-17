import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { NbDialogService } from "@nebular/theme";
import { MemberListDto, UserService } from "../../../../@core/data";

@Component({
  templateUrl: "./member-edit-dialog.component.html",
  selector: "editbutton",
  styleUrls: ["./member-edit-dialog.component.scss"],
})
export class MemberEditDialogComponent {
  form: FormGroup;
  member: MemberListDto = new MemberListDto();

  name = new FormControl("");

  constructor(
    private dialogService: NbDialogService,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnIntit() {}

  setMember(member: MemberListDto) {
    this.member = member;
    this.form = this.fb.group({
      recruitSince: [member.recruitSince || "", Validators.required],
      recruitTill: [member.recruitTill || "", Validators.required],
      memberSince: [member.memberSince || "", Validators.required],
      //@ts-ignore
      comment: [member.comment || "", Validators.required],
    });
  }

  getName() {
    //@ts-ignore
    return this.member.name;
  }

  onSubmit() {
    this.member.comment = this.form.controls[`comment`].value;
    this.member.recruitSince = this.form.controls[`recruitSince`].value;
    this.userService.update(this.member);
  }
}
