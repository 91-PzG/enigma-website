import { Injectable } from "@angular/core";
import { HLLMap, HLLMapService } from "../data/hll-map.service";

@Injectable()
export class HLLMapMockService extends HLLMapService {
  getData() {
    const data: HLLMap[] = [
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
    return Promise.resolve(data);
  }
}
