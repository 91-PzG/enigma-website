import { Observable } from "rxjs";

export interface HLLMap {
  name: string;
}

export abstract class HLLMapData {
  abstract getData(): Observable<HLLMap[]>;
}
