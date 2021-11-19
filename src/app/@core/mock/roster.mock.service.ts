import { Injectable } from "@angular/core";
import { RosterDto } from "../../../util/roster";
import { RosterService } from "../data";

@Injectable()
export class RosterMockService extends RosterService {
  getData(id: number) {
    const data: RosterDto = {
      eventname: "Freundschaftsspiel gegen die 38.",
      commander: {
        id: 1,
        squadlead: false,
        commander: true,
        timestamp: new Date().toString(),
        enrolmentType: "AN",
        name: "Soxxes",
        squadId: null,
        position: null,
        role: "Commander",
        isPresent: true,
      },

      pool: [
        {
          id: 2,
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          enrolmentType: "AN",
          name: "Chriz",
          squadId: null,
          position: null,
          role: null,
          isPresent: true,
        },
        {
          id: 3,
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          enrolmentType: "AN",
          name: "Hudson",
          squadId: null,
          position: null,
          role: null,
          isPresent: true,
        },
        {
          id: 4,
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          enrolmentType: "AN",
          name: "Andi",
          squadId: null,
          position: null,
          role: null,
          isPresent: true,
        },
        {
          id: 5,
          squadlead: false,
          commander: false,
          timestamp: new Date().toString(),
          enrolmentType: "AN",
          name: "Samu",
          squadId: null,
          position: null,
          role: null,
          isPresent: true,
        },
      ],
      reserve: [
        {
          id: 6,
          squadlead: true,
          commander: false,
          timestamp: new Date().toString(),
          enrolmentType: "RE",
          name: "Belazur",
          squadId: null,
          position: null,
          role: null,
          isPresent: true,
        },
      ],
      squads: [
        {
          id: 1,
          name: "Angriff",
          position: 0,
          members: [
            {
              id: 7,
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              enrolmentType: "AN",
              name: "Samu 1",
              squadId: 1,
              position: 0,
              role: null,
              isPresent: true,
            },
          ],
        },
        {
          id: 2,
          name: "Verteidigung",
          position: 1,
          members: [
            {
              id: 8,
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              enrolmentType: "AN",
              name: "Samu 2",
              squadId: 2,
              position: 0,
              role: null,
              isPresent: true,
            },
          ],
        },
        {
          id: 3,
          name: "Abficker",
          position: 2,
          members: [
            {
              id: 9,
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              enrolmentType: "AN",
              name: "Samu 3",
              squadId: 3,
              position: 0,
              role: null,
              isPresent: true,
            },
          ],
        },
        {
          id: 4,
          name: "Hybrid",
          position: 3,
          members: [
            {
              id: 10,
              squadlead: true,
              commander: false,
              timestamp: new Date().toString(),
              enrolmentType: "AN",
              name: "Samu 4",
              squadId: 4,
              position: 0,
              role: null,
              isPresent: true,
            },
          ],
        },
      ],
    };
    return Promise.resolve(data);
  }
}
