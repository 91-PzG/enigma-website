import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import { HLLMap, HLLMapData } from "../data/hll-map";

@Injectable()
export class HLLMapService extends HLLMapData {
  data: HLLMap[] = [
    { name: "St.Marie-Du-Mont" },
    { name: "Sainte-Mère-Église" },
    { name: "Sainte-Marie-du-Mont" },
    { name: "Foy" },
    { name: "Hurtgen Forest" },
    { name: "Utah Beach" },
    { name: "Omaha Beach" },
    { name: "Hill 400" },
    { name: "Purple Heart Lane" },
    { name: "Kursk" },
    { name: "Stalingrad" },
    { name: "folgt" },
  ];

  getData(): Observable<HLLMap[]> {
    return Observable.of(this.data);
  }
}
