export type EnrolementType = "AN" | "AB" | "RE";
export type Roles = "Commander" | null;
export type Divisions = "Infanterie" | "Recon" | "Armor" | "Artillerie";

export interface Enrolment {
  id: number;
  abteilung: Divisions;
  squadlead: boolean;
  commander: boolean;
  timestamp: string;
  teilahme: EnrolementType;
  username: string;
  squad: number | null;
  position: number;
  role: Roles;
}
