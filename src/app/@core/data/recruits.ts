import { Observable } from "rxjs";

export interface Recruit {
  id?: string;
  name: string;
  recruitSince: Date;
  recruitTill: Date;
  comment: string;
}

export abstract class RecruitsData {
  abstract getData(): Observable<Recruit[]>;
}
