import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import { HLLFaction, HLLFactionData } from "../data/hll-faction";

@Injectable()
export class HLLFactionService extends HLLFactionData {
  data: HLLFaction[] = [
    { name: "Alliierte" },
    { name: "Achsenmächte" },
    { name: "Soviets" },
    { name: "folgt" },
  ];

  getData(): Observable<HLLFaction[]> {
    return Observable.of(this.data);
  }
}
