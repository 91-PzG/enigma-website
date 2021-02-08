import { Division, DivisionDto } from "./division";
import { Enrolment } from "./enrolment";

export interface RosterDto {
  eventname: string;
  commander: Enrolment | null;
  infanterie: DivisionDto;
  armor: DivisionDto;
  recon: DivisionDto;
  artillery: DivisionDto;
}

export class Roster {
  eventname: string;
  commander: Enrolment | null;
  infanterie: Division;
  armor: Division;
  recon: Division;
  artillery: Division;
  enroled: number = 0;

  constructor(data: RosterDto) {
    this.eventname = data.eventname;
    this.commander = data.commander;
    this.infanterie = new Division(data.infanterie);
    this.armor = new Division(data.armor);
    this.recon = new Division(data.recon);
    this.artillery = new Division(data.artillery);
    this.calcEnroled();
  }

  calcEnroled() {
    this.enroled =
      this.infanterie.enroled +
      this.armor.enroled +
      this.recon.enroled +
      this.artillery.enroled;
  }

  setCommander(commander: Enrolment) {
    this.removeCommander();
    this.commander = commander;
  }

  removeCommander() {
    if (this.commander) {
      this.commander.role = null;
      this[this.commander.division].moveTo(this.commander);
      this.commander = null;
    }
  }
}
