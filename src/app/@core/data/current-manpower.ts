import { Observable } from "rxjs";

export interface CurrentManpower {
  total: number;
  infanterie: number;
  panzer: number;
  rcon: number;
  artillerie: number;
  recruits: number;
  reserve: number;
}

export abstract class CurrentManpowerData {
  abstract getData(): Observable<CurrentManpower>;
}
