import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import {
  Division,
  Enrolment,
  Roster,
  RosterData,
} from "../../@core/data/roster";

@Injectable({ providedIn: "root" })
export class RosterDataService {
  data: Roster;
  test: number;
  divisions: { name: string; key: string }[] = [
    { name: "Infanterie", key: "infanterie" },
    { name: "Panzer", key: "armor" },
    { name: "Aufklärer", key: "recon" },
    { name: "Artillerie", key: "artillery" },
  ];

  constructor(private service: RosterData) {
    this.test = Math.random();
  }

  loadRoster(id: number) {
    const observable = this.service.getData(id);
    observable.subscribe((data) => {
      this.data = data;
    });
    return observable;
  }

  createSquad(name: string, division: string) {
    this.getDivision(division).createSquad({
      name,
      id: 1,
      position: 5,
      members: [],
    });
  }

  drop(event: CdkDragDrop<any>, division: string) {
    const div = this.getDivision(division);
    if (event.container.id == event.previousContainer.id) {
      if (event.container.id.startsWith("squad"))
        div.moveInSquad(
          event.previousIndex,
          event.currentIndex,
          Number.parseInt(event.container.id.substring(6))
        );
    } else {
      const soldier: Enrolment = event.item.data;
      div.moveFrom(soldier);

      soldier.squad = Number.parseInt(event.container.id.substring(6));
      soldier.position = event.currentIndex;

      div.moveTo(soldier, event.currentIndex);
    }
  }

  private getDivision(division: string): Division {
    return this.data[division];
  }
}
