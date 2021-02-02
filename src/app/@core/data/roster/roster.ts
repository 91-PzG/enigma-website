import { Division, DivisionDto } from "./division";
import { Enrolment } from "./enrolment";

export interface RosterDto {
  commander: Enrolment | null;
  infanterie: DivisionDto;
  armor: DivisionDto;
  recon: DivisionDto;
  artillery: DivisionDto;
}

export class Roster {
  commander: Enrolment | null;
  infanterie: Division;
  armor: Division;
  recon: Division;
  artillery: Division;

  constructor(data: RosterDto) {
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
      switch (this.commander.abteilung) {
        case "Armor":
          this.armor.moveTo(this.commander, null);
          break;
        case "Artillerie":
          this.artillery.moveTo(this.commander, null);
          break;
        case "Recon":
          this.recon.moveTo(this.commander, null);
          break;
        default:
          this.infanterie.moveTo(this.commander, null);
      }
      this.commander = null;
    }
  }
}
