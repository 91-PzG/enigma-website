import { Observable } from "rxjs";

export interface HLLEvent {
  id: number;
  name: string;
  beschreibung: string;
  datum: string;
  treffpunkt: string;
  server: string;
  passwort: string;
  anmeldefrist: string;
  spielerzahl: number;
  teilnehmer: number;
  organisator: string;
  verpflichtend: boolean;
  closed: true;
  vorbesprechung: string;
  runden: number;
  karte: string;
  seite: string;
  kommandant: string;
  locked: boolean;
  anmeldung: Anmeldung | null;
}

export interface Anmeldung {
  type: string;
  squad: number;
  abteilung: string;
}

export abstract class HLLEventData {
  abstract getData(eventId: number): Observable<HLLEvent>;
}
