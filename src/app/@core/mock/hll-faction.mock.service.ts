import { Injectable } from "@angular/core";
import { HLLFaction, HLLFactionService } from "../data/hll-faction.service";

@Injectable()
export class HLLFactionMockService extends HLLFactionService {
  getData() {
    const data: HLLFaction[] = [
      { name: "Alliierte" },
      { name: "Achsenmächte" },
      { name: "Soviets" },
      { name: "folgt" },
    ];
    return Promise.resolve(data);
  }
}
