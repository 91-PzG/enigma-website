import { AfterContentInit, Component, Input } from "@angular/core";
import { Enrolment } from "../../../../util/enrolment";

@Component({
  selector: "soldier-box",
  styleUrls: [
    "../roster-component/roster-component.scss",
    "./soldier-box.component.scss",
  ],
  templateUrl: "./soldier-box.component.html",
})
export class SoldierBoxComponent implements AfterContentInit {
  @Input() soldier: Enrolment;
  role: string;
  attendance: string;
  attendanceStatus: string;

  ngAfterContentInit(): void {
    this.role = "role-" + (this.soldier.role ? this.soldier.role : "rifleman");

    this.setAttendance();
  }

  switchAttendance() {
    this.soldier.isPresent = !this.soldier.isPresent;
    this.setAttendance();
  }

  setAttendance() {
    [this.attendance, this.attendanceStatus] = this.soldier.isPresent
      ? ["checkmark-outline", "success"]
      : ["close-outline", "danger"];
  }
}
