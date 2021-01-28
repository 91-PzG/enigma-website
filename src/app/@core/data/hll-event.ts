import { Observable } from "rxjs";

export interface HLLEvent {
  id: number;
  name: string;
  beschreibung: string;
  datum: Date;
  treffpunkt: string;
  server: string;
  password: string;
  anmeldefrist: Date;
  spielerzahl: number;
  teilnehmer: number;
  organistor: string;
  verpflichtend: boolean;
  closed: true;
  spiel?: HLLGame;
}

export interface HLLGame {
  vorbesprechung: Date;
  runden: number;
  karte: string;
  seite: string;
  kommandant: string;
}

export abstract class HLLEventData {
  abstract getUsers(): Observable<HLLEvent>;
}
