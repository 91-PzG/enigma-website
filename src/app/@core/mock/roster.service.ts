import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Roster, RosterDto } from "../data/roster";

@Injectable()
export class RosterService {
  data: RosterDto = {
    commander: {
      id: 1,
      abteilung: "Infanterie",
      squadlead: false,
      commander: true,
      timestamp: new Date().toString(),
      teilahme: "AN",
      username: "Soxxes",
      squad: null,
      position: null,
      role: "Commander",
    },
    infanterie: {
      pool: [
        {
          id: 2,
          abteilung: "Infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Chriz",
          squad: null,
          position: null,
          role: null,
        },
      ],
      reserve: [
        {
          id: 3,
          abteilung: "Infanterie",
          squadlead: true,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "RE",
          username: "Belazur",
          squad: null,
          position: null,
          role: null,
        },
      ],
      squads: [
        {
          id: 1,
          name: "Squad #1",
          position: 1,
          members: [
            {
              id: 3,
              abteilung: "Infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu",
              squad: null,
              position: null,
              role: null,
            },
          ],
        },
      ],
    },
    recon: {
      pool: [
        {
          id: 2,
          abteilung: "Infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Chriz",
          squad: null,
          position: null,
          role: null,
        },
      ],
      reserve: [
        {
          id: 3,
          abteilung: "Infanterie",
          squadlead: true,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "RE",
          username: "Belazur",
          squad: null,
          position: null,
          role: null,
        },
      ],
      squads: [
        {
          id: 1,
          name: "Squad #1",
          position: 1,
          members: [
            {
              id: 3,
              abteilung: "Infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu",
              squad: null,
              position: null,
              role: null,
            },
          ],
        },
      ],
    },
    armor: {
      pool: [
        {
          id: 2,
          abteilung: "Infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Chriz",
          squad: null,
          position: null,
          role: null,
        },
      ],
      reserve: [
        {
          id: 3,
          abteilung: "Infanterie",
          squadlead: true,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "RE",
          username: "Belazur",
          squad: null,
          position: null,
          role: null,
        },
      ],
      squads: [
        {
          id: 1,
          name: "Squad #1",
          position: 1,
          members: [
            {
              id: 3,
              abteilung: "Infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu",
              squad: null,
              position: null,
              role: null,
            },
          ],
        },
      ],
    },
    artillery: {
      pool: [
        {
          id: 2,
          abteilung: "Infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Chriz",
          squad: null,
          position: null,
          role: null,
        },
      ],
      reserve: [
        {
          id: 3,
          abteilung: "Infanterie",
          squadlead: true,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "RE",
          username: "Belazur",
          squad: null,
          position: null,
          role: null,
        },
      ],
      squads: [
        {
          id: 1,
          name: "Squad #1",
          position: 1,
          members: [
            {
              id: 3,
              abteilung: "Infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu",
              squad: null,
              position: null,
              role: null,
            },
          ],
        },
      ],
    },
  };

  getData(id: number): Observable<Roster> {
    return of(new Roster(this.data));
  }
}
