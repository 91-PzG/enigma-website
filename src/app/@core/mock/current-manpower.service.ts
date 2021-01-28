import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import { CurrentManpowerData } from "../data/current-manpower";

@Injectable()
export class CurrentManpowerService extends CurrentManpowerData {
  data = {
    total: 100,
    infanterie: 50,
    panzer: 15,
    rcon: 8,
    artillerie: 4,
    recruits: 10,
    reserve: 20,
  };

  getData() {
    return Observable.of(this.data);
  }
}
