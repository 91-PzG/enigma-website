import { Injectable } from "@angular/core";

export interface Recruit {
  id?: string;
  name: string;
  recruitSince: Date;
  recruitTill: Date;
  comment: string;
}

@Injectable()
export class RecruitsService {
  getData(): Promise<Recruit[]> {
    return Promise.resolve<Recruit[]>([]);
  }
}
