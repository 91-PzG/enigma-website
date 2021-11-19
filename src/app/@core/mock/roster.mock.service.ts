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
        division: "infanterie",
        squadlead: false,
        commander: true,
        timestamp: new Date().toString(),
        enrolmentType: "AN",
        username: "Soxxes",
        squadId: null,
        position: null,
        role: "Commander",
        isPresent: true,
      },
      infanterie: {
        pool: [
          {
            id: 2,
            division: "infanterie",
            squadlead: false,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "AN",
            username: "Chriz",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
          },
          {
            id: 3,
            division: "infanterie",
            squadlead: false,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "AN",
            username: "Hudson",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
          },
          {
            id: 4,
            division: "infanterie",
            squadlead: false,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "AN",
            username: "Andi",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
          },
          {
            id: 5,
            division: "infanterie",
            squadlead: false,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "AN",
            username: "Samu",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
          },
        ],
        reserve: [
          {
            id: 6,
            division: "infanterie",
            squadlead: true,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "RE",
            username: "Belazur",
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
            division: "infanterie",
            position: 0,
            members: [
              {
                id: 7,
                division: "infanterie",
                squadlead: true,
                commander: false,
                timestamp: new Date().toString(),
                enrolmentType: "AN",
                username: "Samu 1",
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
            division: "infanterie",
            position: 1,
            members: [
              {
                id: 8,
                division: "infanterie",
                squadlead: true,
                commander: false,
                timestamp: new Date().toString(),
                enrolmentType: "AN",
                username: "Samu 2",
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
            division: "infanterie",
            position: 2,
            members: [
              {
                id: 9,
                division: "infanterie",
                squadlead: true,
                commander: false,
                timestamp: new Date().toString(),
                enrolmentType: "AN",
                username: "Samu 3",
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
            division: "infanterie",
            members: [
              {
                id: 10,
                division: "infanterie",
                squadlead: true,
                commander: false,
                timestamp: new Date().toString(),
                enrolmentType: "AN",
                username: "Samu 4",
                squadId: 4,
                position: 0,
                role: null,
                isPresent: true,
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
            enrolmentType: "AN",
            username: "Chriz",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
          },
        ],
        reserve: [
          {
            id: 12,
            division: "recon",
            squadlead: true,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "RE",
            username: "Belazur",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
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
                enrolmentType: "AN",
                username: "Samu",
                squadId: 5,
                position: 0,
                role: null,
                isPresent: true,
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
            enrolmentType: "AN",
            username: "Chriz",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
          },
        ],
        reserve: [
          {
            id: 15,
            division: "armor",
            squadlead: true,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "RE",
            username: "Belazur",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
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
                enrolmentType: "AN",
                username: "Samu",
                squadId: 6,
                position: 0,
                role: null,
                isPresent: true,
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
            enrolmentType: "AN",
            username: "Chriz",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
          },
        ],
        reserve: [
          {
            id: 18,
            division: "artillery",
            squadlead: true,
            commander: false,
            timestamp: new Date().toString(),
            enrolmentType: "RE",
            username: "Belazur",
            squadId: null,
            position: null,
            role: null,
            isPresent: true,
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
                enrolmentType: "AN",
                username: "Samu",
                squadId: 7,
                position: 0,
                role: null,
                isPresent: true,
              },
            ],
          },
        ],
      },
    };
    return Promise.resolve(data);
  }
}