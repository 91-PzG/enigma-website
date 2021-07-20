import { Component } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { NbAccessChecker } from "@nebular/security";
import { filter } from "rxjs/operators";
import { CreateSquadComponent } from "../create-squad/create-squad.component";
import { RosterDataService } from "../roster-data.service";
import { RosterDivisionComponent } from "../roster-division/roster-division.component";
import { RosterOverviewComponent } from "../roster-overview/roster-overview.component";
import { RosterSquadComponent } from "../roster-squad/roster-squad.component";

export const ROSTER_COMPONENTS = [
  RosterOverviewComponent,
  RosterDivisionComponent,
  RosterSquadComponent,
  CreateSquadComponent,
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
    public service: RosterDataService,
    router: Router
  ) {
    this.eventId = Number.parseInt(router.url.split("/")[2]);
    router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        console.log("test");
        this.service.socket?.disconnect();
      });
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.service.loadRoster(this.eventId).subscribe(() => {
      this.loading = false;
    });
  }
}
