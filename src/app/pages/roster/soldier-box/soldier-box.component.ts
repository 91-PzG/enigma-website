import { AfterContentInit, Component, Input } from "@angular/core";
import { Enrolment } from "../../../../util/enrolment";
import { RosterSocketService } from "../roster-data.service";

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

  constructor(public service: RosterSocketService) {}

  ngAfterContentInit(): void {
    this.role = "role-" + (this.soldier.role ? this.soldier.role : "rifleman");
  }

  switchAttendance() {
    this.service.setAttandance(this.soldier);
  }
}
