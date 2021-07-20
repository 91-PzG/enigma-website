import { Enrolment } from "./enrolment";
import { Squad, SquadDto } from "./squad";

export interface DivisionDto {
  pool: Enrolment[];
  reserve: Enrolment[];
  squads: SquadDto[];
}

export class Division {
  pool: Enrolment[];
  reserve: Enrolment[];
  squads: Squad[] = [];
  enroled: number = 0;

  sortByDate = (a: Enrolment, b: Enrolment) => {
    return a.timestamp > b.timestamp ? 1 : -1;
  };

  constructor(data: DivisionDto) {
    this.pool = data.pool;
    this.reserve = data.reserve;
    console.log(data);
    data.squads.forEach((squad) => {
      this.squads.push(new Squad(squad));
      this.enroled += squad.members?.length;
    });
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
}
