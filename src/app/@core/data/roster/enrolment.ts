export type EnrolementType = "AN" | "AB" | "RE";
export type Roles = "Commander" | null;
export type Divisions = "infanterie" | "recon" | "armor" | "artillerie";

export class Enrolment {
  id: number;
  division: Divisions;
  squadlead: boolean;
  commander: boolean;
  timestamp: string;
  teilahme: EnrolementType;
  username: string;
  squad: number | null;
  position: number;
  role: Roles;

  constructor(data: Enrolment) {
    this.id = data.id;
    this.division = data.division;
    this.squadlead = data.squadlead;
    this.commander = data.commander;
    this.timestamp = data.timestamp;
    this.teilahme = data.teilahme;
    this.username = data.username;
    this.squad = data.squad;
    this.position = data.position;
    this.role = data.role;
  }
}
