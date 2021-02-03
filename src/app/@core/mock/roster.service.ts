import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Roster, RosterDto } from "../data/roster";

@Injectable()
export class RosterService {
  data: RosterDto = {
    eventname: "Freundschaftsspiel gegen die 38.",
    commander: {
      id: 1,
      division: "infanterie",
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
          division: "infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Chriz",
          squad: null,
          position: null,
          role: null,
        },
        {
          id: 3,
          division: "infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Hudson",
          squad: null,
          position: null,
          role: null,
        },
        {
          id: 4,
          division: "infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Andi",
          squad: null,
          position: null,
          role: null,
        },
        {
          id: 5,
          division: "infanterie",
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          teilahme: "AN",
          username: "Samu",
          squad: null,
          position: null,
          role: null,
        },
      ],
      reserve: [
        {
          id: 6,
          division: "infanterie",
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
          name: "Angriff",
          division: "infanterie",
          position: 0,
          members: [
            {
              id: 7,
              division: "infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu 1",
              squad: 1,
              position: 0,
              role: null,
            },
          ],
        },
        {
          id: 2,
          name: "Verteidigung",
          division: "infanterie",
          position: 1,
          members: [
            {
              id: 8,
              division: "infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu 2",
              squad: 2,
              position: 0,
              role: null,
            },
          ],
        },
        {
          id: 3,
          name: "Abficker",
          division: "infanterie",
          position: 2,
          members: [
            {
              id: 9,
              division: "infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu 3",
              squad: 3,
              position: 0,
              role: null,
            },
          ],
        },
        {
          id: 4,
          name: "Hybrid",
          position: 3,
          division: "infanterie",
          members: [
            {
              id: 10,
              division: "infanterie",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu 4",
              squad: 4,
              position: 0,
              role: null,
            },
          ],
        },
      ],
    },
    recon: {
      pool: [
        {
          id: 11,
          division: "recon",
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
          id: 12,
          division: "recon",
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
          id: 5,
          name: "Squad #1",
          position: 1,
          division: "recon",
          members: [
            {
              id: 13,
              division: "recon",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu",
              squad: 5,
              position: 0,
              role: null,
            },
          ],
        },
      ],
    },
    armor: {
      pool: [
        {
          id: 14,
          division: "armor",
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
          id: 15,
          division: "armor",
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
          id: 6,
          name: "Squad #1",
          position: 1,
          division: "armor",
          members: [
            {
              id: 16,
              division: "armor",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu",
              squad: 6,
              position: 0,
              role: null,
            },
          ],
        },
      ],
    },
    artillery: {
      pool: [
        {
          id: 17,
          division: "artillery",
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
          id: 18,
          division: "artillery",
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
          id: 7,
          name: "Squad #1",
          position: 1,
          division: "artillery",
          members: [
            {
              id: 19,
              division: "artillery",
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              teilahme: "AN",
              username: "Samu",
              squad: 7,
              position: 0,
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
