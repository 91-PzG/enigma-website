import { Injectable } from "@angular/core";

export interface HLLMap {
  name: string;
}

@Injectable()
export class HLLMapService {
  getData(): Promise<HLLMap[]> {
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
