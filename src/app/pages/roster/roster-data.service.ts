import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { environment } from "../../../environments/environment";
import {
  Division,
  DivisionDto,
  Enrolment,
  Roster,
  RosterData,
  RosterDto,
  SquadDto,
} from "../../@core/data/roster";

const emptyDivisionDto: DivisionDto = {
  pool: [],
  reserve: [],
  squads: [],
};

const emptyRosterDto: RosterDto = {
  eventname: "",
  commander: null,
  infanterie: emptyDivisionDto,
  armor: emptyDivisionDto,
  artillery: emptyDivisionDto,
  recon: emptyDivisionDto,
};

@Injectable({ providedIn: "root" })
export class RosterDataService {
  data: Roster = new Roster(emptyRosterDto);
  socket: any;
  eventId: number;

  divisions: { name: string; key: string }[] = [
    { name: "Infanterie", key: "infanterie" },
    { name: "Panzer", key: "armor" },
    { name: "Aufklärer", key: "recon" },
    { name: "Artillerie", key: "artillery" },
  ];

  constructor(private service: RosterData) {}

  loadRoster(id: number) {
    if (this.socket?.connected) this.socket.disconnect();

    this.eventId = id;

    const observable = this.service.getData(id);
    observable.subscribe((data) => {
      this.data = new Roster(data);
    });

    this.connectToSocket();
    return observable;
  }

  deleteSquad(id: number) {
    this.socket.emit("delete-squad", { id });
  }

  createSquad(name: string, division: string) {
    this.socket.emit("create-squad", {
      name,
      division,
      position: this.getDivision(division).squads.length,
      eventId: this.eventId,
    });
  }

  renameSquad(name: string, position: number, division: string, id: number) {
    this.socket.emit("rename-squad", { name, position, division, id });
  }

  drop(event: CdkDragDrop<any>) {
    const oldSoldier = event.item.data;
    const newSoldier = new Enrolment(oldSoldier);

    newSoldier.position = event.currentIndex;
    if (event.container.id.startsWith("squad"))
      newSoldier.squadId = Number.parseInt(event.container.id.substring(6));
    else newSoldier.squadId = null;

    if (
      !newSoldier.squadId &&
      !oldSoldier.squadId &&
      newSoldier.division == oldSoldier.division
    )
      return;

    this.socket.emit("move-soldier", { oldSoldier, newSoldier });
  }

  private connectToSocket() {
    this.socket = io.connect(environment.api, {
      query: { eventId: this.eventId.toString() },
    });

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
        const newDivision = this.getDivision(newSoldier.division);
        if (oldSoldier.squadId && oldSoldier.squadId == newSoldier.squadId) {
          newDivision.moveInSquad(
            oldSoldier.position,
            newSoldier.position,
            newSoldier.squadId
          );
        } else {
          const oldDivision = this.getDivision(oldSoldier.division);
          oldDivision.moveFrom(oldSoldier);
          newDivision.moveTo(newSoldier);
        }
        this.data.calcEnroled();
      }
    );

    this.socket.on(
      "delete-squad",
      ({ position, division }: { position: number; division: string }) => {
        this.getDivision(division).removeSquad(position);
        this.data.calcEnroled();
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
