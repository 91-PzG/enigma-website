import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RosterDataService } from "../roster-data.service";
import { RosterDivisionComponent } from "../roster-division/roster-division.component";
import { RosterOverviewComponent } from "../roster-overview/roster-overview.component";

export const ROSTER_COMPONENTS = [
  RosterOverviewComponent,
  RosterDivisionComponent,
];

@Component({
  selector: "roster-component",
  templateUrl: "./roster-component.html",
  styleUrls: ["./roster-component.scss"],
})
export class RosterComponent {
  loading = true;
  movies = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
  ];

  constructor(public service: RosterDataService, router: Router) {
    const eventId = Number.parseInt(router.url.split("/")[2]);
    this.service.loadRoster(eventId).subscribe(() => {
      this.loading = false;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
