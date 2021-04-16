export type EnrolementType = "AN" | "AB" | "RE";
export type Roles = "Commander" | null;
export type Divisions = "infanterie" | "recon" | "armor" | "artillery";

export class Enrolment {
  id: number;
  division: Divisions;
  squadlead: boolean;
  commander: boolean;
  timestamp: string;
  enrolmentType: EnrolementType;
  username: string;
  squadId: number | null;
  position: number;
  role: Roles;

  constructor(data: Enrolment) {
    this.id = data.id;
    this.division = data.division;
    this.squadlead = data.squadlead;
    this.commander = data.commander;
    this.timestamp = data.timestamp;
    this.enrolmentType = data.enrolmentType;
    this.username = data.username;
    this.squadId = data.squadId;
    this.position = data.position;
    this.role = data.role;
  }
}
