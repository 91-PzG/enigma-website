import { Enrolment } from "./enrolment";

export interface SquadDto {
  id: number;
  name: string;
  position: number;
  members: Enrolment[];
}

export class Squad implements SquadDto {
  id: number;
  name: string;
  position: number;
  members: Enrolment[];

  constructor(data: SquadDto) {
    this.id = data.id;
    this.name = data.name;
    this.position = data.position;
    this.members = data.members;
  }

  addMember(member: Enrolment) {
    this.members.push(member);
  }

  moveMember(oldPos: number, newPos: number) {
    const squad = this.members[oldPos];
    squad.position = newPos;

    this.shiftMember(oldPos, newPos);
    this.members.push(squad);
  }

  removeMember(pos: number) {
    this.shiftMember(pos, this.members.length);
  }

  private shiftMember(oldPos: number, newPos: number) {
    const left = Math.min(oldPos, newPos);
    const right = Math.max(oldPos, newPos);
    const dir = oldPos > newPos ? 1 : -1;

    this.members.splice(oldPos, 1);
    this.members.forEach((s) => {
      if (s.position >= left && s.position <= right) s.position += 1 * dir;
    });
  }
}
