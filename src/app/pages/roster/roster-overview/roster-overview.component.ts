import { Component } from "@angular/core";
import { RosterSocketService } from "../roster-data.service";

@Component({
  selector: "roster-overview",
  styleUrls: ["./roster-overview.component.scss"],
  templateUrl: "./roster-overview.component.html",
})
export class RosterOverviewComponent {
  unfolded = {
    infanterie: false,
    armor: false,
    recon: false,
    artillery: false,
  };

  constructor(public service: RosterSocketService) {}
}
