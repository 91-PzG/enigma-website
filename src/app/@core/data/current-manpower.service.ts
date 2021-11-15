import { Injectable } from "@angular/core";

export interface CurrentManpower {
  total: number;
  infanterie: number;
  panzer: number;
  rcon: number;
  artillerie: number;
  recruits: number;
  reserve: number;
}

@Injectable()
export class CurrentManpowerService {
  getData(): Promise<CurrentManpower> {
    const manpower: CurrentManpower = {
      total: 100,
      infanterie: 50,
      panzer: 20,
      rcon: 19,
      artillerie: 10,
      recruits: 1,
      reserve: 23,
    };
    return Promise.resolve<CurrentManpower>(manpower);
  }
}
