import { Injectable } from "@angular/core";

export interface HLLFaction {
  name: string;
}

@Injectable()
export class HLLFactionService {
  getData(): Promise<HLLFaction[]> {
    const factions: HLLFaction[] = [
      { name: "Alliierte" },
      { name: "Achsenmächte" },
      { name: "Soviets" },
      { name: "folgt" },
    ];
    return Promise.resolve<HLLFaction[]>(factions);
  }
}
