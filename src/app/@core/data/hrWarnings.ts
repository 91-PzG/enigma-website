import { Observable } from "rxjs";

export interface HrWarning {
  id?: string;
  name: string;
  missedConsecutiveEvents: number;
  missedEvents: number;
  comment: string;
}

export abstract class HrWarningsData {
  abstract getData(): Observable<HrWarning[]>;
}
