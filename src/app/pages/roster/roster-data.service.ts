import { Injectable } from "@angular/core";
import { Roster, RosterData } from "../../@core/data/roster";

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
}
