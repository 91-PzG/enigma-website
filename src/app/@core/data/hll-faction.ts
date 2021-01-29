import { Observable } from "rxjs";

export interface HLLFaction {
  name: string;
}

export abstract class HLLFactionData {
  abstract getData(): Observable<HLLFaction[]>;
}
