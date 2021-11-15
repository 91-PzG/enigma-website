import { Injectable } from "@angular/core";
import { CurrentManpowerService } from "../data";

@Injectable()
export class CurrentManpowerMockService extends CurrentManpowerService {
  getData() {
    const data = {
      total: 100,
      infanterie: 50,
      panzer: 15,
      rcon: 8,
      artillerie: 4,
      recruits: 10,
      reserve: 20,
    };
    return Promise.resolve(data);
  }
}
