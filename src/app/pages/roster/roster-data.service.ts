import { Injectable } from "@angular/core";
import { Roster, RosterData } from "../../@core/data/roster";

@Injectable()
export class RosterDataService {
  data: Roster;

  constructor(private service: RosterData) {}

  loadRoster(id: number) {
    const observable = this.service.getData(id);
    observable.subscribe((data) => {
      this.data = data;
    });
    return observable;
  }
}
