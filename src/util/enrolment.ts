export type EnrolementType = "AN" | "AB" | "RE";
export type Roles = "Commander" | null;
export type Divisions = "infanterie" | "recon" | "armor" | "artillery";

export class EnrolmentDto {
  id: number;
  squadlead: boolean;
  commander: boolean;
  timestamp: string;
  enrolmentType: EnrolementType;
  name: string;
  squadId: number | null;
  position: number;
  role: Roles;
  isPresent: boolean;
}

export class Enrolment implements EnrolmentDto {
  id: number;
  squadlead: boolean;
  commander: boolean;
  timestamp: string;
  enrolmentType: EnrolementType;
  name: string;
  squadId: number | null;
  position: number;
  role: Roles;
  isPresent: boolean;

  constructor(data: EnrolmentDto) {
    this.id = data.id;
    this.squadlead = data.squadlead;
    this.commander = data.commander;
    this.timestamp = data.timestamp;
    this.enrolmentType = data.enrolmentType;
    this.name = data.name;
    this.squadId = data.squadId;
    this.position = data.position;
    this.role = data.role;
  }
}
