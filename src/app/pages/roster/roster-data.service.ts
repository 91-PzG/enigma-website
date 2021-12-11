import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { environment } from "../../../environments/environment";
import { Enrolment } from "../../../util/enrolment";
import { Roster, RosterDto } from "../../../util/roster";
import { SquadDto } from "../../../util/squad";
import { RosterService } from "../../@core/data";

const emptyRosterDto: RosterDto = {
  eventname: "",
  commander: null,
  pool: [],
  reserve: [],
  squads: [],
};

@Injectable()
export class RosterSocketService {
  data: Roster = new Roster(emptyRosterDto);
  socket: any;
  eventId: number;

  constructor(private service: RosterService) {}

  async loadRoster(id: number): Promise<void> {
    if (this.socket?.connected) this.socket.disconnect();

    this.eventId = id;

    const data = await this.service.getData(id);

    this.data = new Roster(data);

    this.connectToSocket();
  }

  deleteSquad(id: number) {
    this.socket.emit("delete-squad", { id });
  }

  createSquad(name: string) {
    this.socket.emit("create-squad", {
      name,
      position: this.data.squads.length,
      eventId: this.eventId,
    });
  }

  renameSquad(name: string, position: number, id: number) {
    this.socket.emit("rename-squad", { name, position, id });
  }

  drop(event: CdkDragDrop<any>) {
    const oldSoldier = event.item.data;
    const newSoldier = new Enrolment(oldSoldier);

    newSoldier.position = event.currentIndex;
    if (event.container.id.startsWith("squad"))
      newSoldier.squadId = Number.parseInt(event.container.id.substring(6));
    else newSoldier.squadId = null;

    if (!newSoldier.squadId && !oldSoldier.squadId) return;

    this.socket.emit("move-soldier", { oldSoldier, newSoldier });
  }

  private connectToSocket() {
    this.socket = io(environment.api, {
      query: { eventId: this.eventId.toString() },
    });

    this.socket.on("create-squad", (squad: SquadDto) => {
      this.data.addSquad(squad);
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
        if (oldSoldier.squadId && oldSoldier.squadId === newSoldier.squadId) {
          this.data.moveInSquad(
            oldSoldier.position,
            newSoldier.position,
            oldSoldier.squadId
          );
        } else {
          this.data.moveFrom(oldSoldier);
          this.data.moveTo(newSoldier);
        }
      }
    );

    this.socket.on("delete-squad", ({ position }: { position: number }) => {
      this.data.removeSquad(position);
    });

    this.socket.on("rename-squad", ({ name, position }) => {
      this.data.renameSquad(name, position);
    });

    this.socket.on("set-attendance", ({ soldier }: { soldier: Enrolment }) => {
      // TODO
    });
  }
}
