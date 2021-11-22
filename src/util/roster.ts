import { Enrolment } from "./enrolment";
import { Squad, SquadDto } from "./squad";

export interface RosterDto {
  eventname: string;
  commander: Enrolment | null;
  pool: Enrolment[];
  reserve: Enrolment[];
  squads: SquadDto[];
}

export class Roster implements RosterDto {
  eventname: string;
  commander: Enrolment | null;
  squads: Squad[] = [];
  pool: Enrolment[];
  reserve: Enrolment[];
  enroled: number = 0;

  sortByDate = (a: Enrolment, b: Enrolment) => {
    return a.timestamp > b.timestamp ? 1 : -1;
  };

  constructor(data: RosterDto) {
    this.eventname = data.eventname;
    this.commander = data.commander;
    this.pool = data.pool;
    this.reserve = data.reserve;
    data.squads.forEach((squad) => {
      this.squads.push(new Squad(squad));
      this.enroled += squad.members?.length;
    });
    this.enroled = this.commander ? 1 : 0;
  }

  setCommander(commander: Enrolment) {
    this.removeCommander();
    this.commander = commander;
    this.enroled++;
  }

  removeCommander() {
    if (this.commander) {
      this.enroled--;
      this.commander.role = null;
      this.moveTo(this.commander);
      this.commander = null;
    }
  }

  addSquad(squad: SquadDto) {
    this.shiftSquads(this.squads.length, squad.position);
    this.squads.splice(squad.position, 0, new Squad(squad));
  }

  moveSquad(oldPos: number, newPos: number) {
    const squad = this.squads[oldPos];
    squad.position = newPos;

    this.shiftSquads(oldPos, newPos);
    this.squads.splice(newPos, 0, squad);
  }

  removeSquad(pos: number) {
    this.squads[pos].members.forEach((soldier) => {
      soldier.squadId = null;
      this.moveTo(soldier);
      this.enroled--;
    });
    this.shiftSquads(pos, this.squads.length);
  }

  private shiftSquads(oldPos: number, newPos: number) {
    const left = Math.min(oldPos, newPos);
    const right = Math.max(oldPos, newPos);
    const dir = oldPos > newPos ? 1 : -1;

    this.squads.splice(oldPos, 1);
    this.squads.forEach((s) => {
      if (s.position >= left && s.position <= right) s.position += 1 * dir;
    });
  }

  moveFrom(soldier: Enrolment) {
    if (soldier.squadId) {
      this.squads
        .find((squad) => squad.id == soldier.squadId)
        .removeSoldier(soldier.position);
      this.enroled--;
    } else if (soldier.enrolmentType == "AN") {
      const index = this.pool.findIndex((find) => find.id == soldier.id);
      this.pool.splice(index, 1);
    } else {
      const index = this.reserve.findIndex((find) => find.id == soldier.id);
      this.reserve.splice(index, 1);
    }
  }

  moveInSquad(oldPos: number, newPos: number, squad: number) {
    this.squads.find((f) => f.id == squad).moveSoldier(oldPos, newPos);
  }

  moveTo(soldier: Enrolment) {
    if (soldier.squadId) {
      this.squads
        .find((squad) => squad.id == soldier.squadId)
        .addSoldier(soldier);
      this.enroled++;
    } else if ((soldier.enrolmentType = "AN")) {
      this.pool.push(soldier);
      this.pool.sort(this.sortByDate);
    } else {
      this.reserve.push(soldier);
      this.reserve.sort(this.sortByDate);
    }
  }

  renameSquad(name: string, position: number) {
    this.squads[position].name = name;
  }

  setAttendance(soldier: Enrolment) {
    if (soldier.squadId == null) {
      if (soldier.enrolmentType == "AN") {
        const index = this.pool.findIndex((s) => s.id == soldier.id);
        this.pool[index] = soldier;
      } else {
        const index = this.reserve.findIndex((s) => s.id == soldier.id);
        this.reserve[index] = soldier;
      }
    } else {
      const squadIndex = this.squads.findIndex(
        (squad) => squad.id == soldier.squadId
      );
      const enrolmentIndex = this.squads[squadIndex].members.findIndex(
        (s) => s.id == soldier.id
      );
      this.squads[squadIndex].members[enrolmentIndex] = soldier;
    }
  }
}
