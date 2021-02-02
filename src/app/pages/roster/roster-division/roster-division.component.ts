import { Component, Input } from "@angular/core";
import { RosterDataService } from "../roster-data.service";

@Component({
  selector: "roster-division",
  styleUrls: ["../roster-component/roster-component.scss"],
  templateUrl: "./roster-division.component.html",
})
export class RosterDivisionComponent {
  @Input() division: string;

  constructor(public service: RosterDataService) {}
}
