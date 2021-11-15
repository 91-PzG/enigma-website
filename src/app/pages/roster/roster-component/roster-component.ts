import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NbAccessChecker } from "@nebular/security";
import { CreateSquadComponent } from "../create-squad/create-squad.component";
import { RosterSocketService } from "../roster-data.service";
import { RosterDivisionComponent } from "../roster-division/roster-division.component";
import { RosterOverviewComponent } from "../roster-overview/roster-overview.component";
import { RosterSquadComponent } from "../roster-squad/roster-squad.component";
import { SoldierBoxComponent } from "../soldier-box/soldier-box.component";

export const ROSTER_COMPONENTS = [
  RosterOverviewComponent,
  RosterDivisionComponent,
  RosterSquadComponent,
  CreateSquadComponent,
  SoldierBoxComponent,
];

@Component({
  selector: "roster-component",
  templateUrl: "./roster-component.html",
  styleUrls: ["./roster-component.scss"],
})
export class RosterComponent {
  loading = true;
  edit = false;
  eventId: number;

  constructor(
    public accessChecker: NbAccessChecker,
    public service: RosterSocketService,
    router: Router
  ) {
    this.eventId = Number.parseInt(router.url.split("/")[2]);
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    await this.service.loadRoster(this.eventId);
    this.loading = false;
  }
}
