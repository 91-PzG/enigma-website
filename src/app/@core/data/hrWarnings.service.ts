import { Injectable } from "@angular/core";

export interface HrWarning {
  id?: string;
  name: string;
  missedConsecutiveEvents: number;
  missedEvents: number;
  comment: string;
}

@Injectable()
export class HrWarningsService {
  getData(): Promise<HrWarning[]> {
    return Promise.resolve([]);
  }
}
