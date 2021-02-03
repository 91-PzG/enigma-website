import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import { io, Socket } from "socket.io-client";
import {
  Division,
  Enrolment,
  Roster,
  RosterData,
  SquadDto,
} from "../../@core/data/roster";

@Injectable({ providedIn: "root" })
export class RosterDataService {
  data: Roster;
  socket: Socket;
  eventId: number;

  divisions: { name: string; key: string }[] = [
    { name: "Infanterie", key: "infanterie" },
    { name: "Panzer", key: "armor" },
    { name: "Aufklärer", key: "recon" },
    { name: "Artillerie", key: "artillery" },
  ];

  constructor(private service: RosterData) {}

  loadRoster(id: number) {
    this.eventId = id;

    const observable = this.service.getData(id);
    observable.subscribe((data) => {
      this.data = data;
    });

    this.connectToSocket();
    return observable;
  }

  deleteSquad(position: number, division: string) {
    this.socket.emit("delete-squad", { position, division });
  }

  createSquad(name: string, division: string) {
    this.socket.emit("create-squad", {
      name,
      division,
      position: this.getDivision(division).squads.length,
    });
  }

  renameSquad(name: string, position: number, division: string) {
    this.socket.emit("rename-squad", { name, position, division });
  }

  drop(event: CdkDragDrop<any>, division: string) {
    const oldSoldier = event.item.data;
    const newSoldier = new Enrolment(oldSoldier);

    newSoldier.position = event.currentIndex;
    if (event.container.id.startsWith("squad"))
      newSoldier.squad = Number.parseInt(event.container.id.substring(6));
    else newSoldier.squad = null;

    this.socket.emit("move-soldier", { oldSoldier, newSoldier });
  }

  private connectToSocket() {
    this.socket = io("localhost:3000", { query: { eventId: this.eventId } });

    this.socket.on("create-squad", (squad: SquadDto) => {
      this.getDivision(squad.division).addSquad(squad);
    });

    this.socket.on(
      "move-soldier",
      ({
        oldSoldier,
        newSoldier,
      }: {
        oldSoldier: Enrolment;
        newSoldier: Enrolment;
      }) => {
        if (newSoldier.division == oldSoldier.division) {
          const division = this.getDivision(newSoldier.division);
          if (oldSoldier.squad == newSoldier.squad) {
            if (oldSoldier.squad) {
              division.moveInSquad(
                oldSoldier.position,
                newSoldier.position,
                newSoldier.squad
              );
            }
          } else {
            division.moveFrom(oldSoldier);
            division.moveTo(newSoldier);
          }
        } else {
          const oldDivision = this.getDivision(oldSoldier.division);
          const newDivision = this.getDivision(newSoldier.division);
          oldDivision.moveFrom(oldSoldier);
          newDivision.moveTo(newSoldier);
        }
      }
    );

    this.socket.on(
      "delete-squad",
      ({ position, division }: { position: number; division: string }) => {
        this.getDivision(division).removeSquad(position);
      }
    );

    this.socket.on("rename-squad", ({ name, position, division }) => {
      this.getDivision(division).renameSquad(name, position);
    });
  }

  private getDivision(division: string): Division {
    return this.data[division];
  }
}
