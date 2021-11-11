import { Enrolment } from "./enrolment";

export interface SquadDto {
  id: number;
  name: string;
  position: number;
  division: string;
  members?: Enrolment[];
}

export class Squad implements SquadDto {
  id: number;
  name: string;
  position: number;
  division: string;
  members: Enrolment[];

  constructor(data: SquadDto) {
    this.id = data.id;
    this.name = data.name;
    this.position = data.position;
    this.members = data.members ? data.members : [];
  }

  addSoldier(soldier: Enrolment) {
    this.shiftSoldier(this.members.length, soldier.position);
    this.members.splice(soldier.position, 0, soldier);
  }

  moveSoldier(oldPos: number, newPos: number) {
    const soldier = this.members[oldPos];
    soldier.position = newPos;

    this.shiftSoldier(oldPos, newPos);
    this.members.splice(newPos, 0, soldier);
  }

  removeSoldier(pos: number) {
    this.shiftSoldier(pos, this.members.length);
  }

  private shiftSoldier(oldPos: number, newPos: number) {
    const left = Math.min(oldPos, newPos);
    const right = Math.max(oldPos, newPos);
    const dir = oldPos > newPos ? 1 : -1;

    this.members.splice(oldPos, 1);
    this.members.forEach((s) => {
      if (s.position >= left && s.position <= right) s.position += dir;
    });
  }
}
