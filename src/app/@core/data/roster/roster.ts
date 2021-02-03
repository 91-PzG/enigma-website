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

  constructor(data: RosterDto) {
    this.eventname = data.eventname;
    this.commander = data.commander;
    this.infanterie = new Division(data.infanterie);
    this.armor = new Division(data.armor);
    this.recon = new Division(data.recon);
    this.artillery = new Division(data.artillery);
  }

  setCommander(commander: Enrolment) {
    this.removeCommander();
    this.commander = commander;
  }

  removeCommander() {
    if (this.commander) {
      this.commander.role = null;
      switch (this.commander.division) {
        case "armor":
          this.armor.moveTo(this.commander);
          break;
        case "artillerie":
          this.artillery.moveTo(this.commander);
          break;
        case "recon":
          this.recon.moveTo(this.commander);
          break;
        default:
          this.infanterie.moveTo(this.commander);
      }
      this.commander = null;
    }
  }
}
