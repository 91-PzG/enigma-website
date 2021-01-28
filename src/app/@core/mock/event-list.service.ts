import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import { EventListData } from "../data/event-list";

@Injectable()
export class EventListService extends EventListData {
  data = [
    {
      name: "Freundschaftsspiel gegen 38.",
      datum: new Date(),
      beschreibung: "Freundschaftsspiel gegen 38. Beschreibung",
      locked: false,
      closed: false,
      teilnehmer: 32,
      spielerzahl: 50,
      anmeldefrist: new Date(),
    },
    {
      name: "Ligaspiel gegen StuG",
      datum: new Date(),
      beschreibung: "Ligaspiel gegen StuG Beschreibung",
      locked: true,
      closed: false,
      teilnehmer: 50,
      spielerzahl: 50,
      anmeldefrist: new Date(),
    },
    {
      name: "Freundschaftsspiel gegen SKG",
      datum: new Date(),
      beschreibung: "Freundschaftsspiel gegen SKG Beschreibung",
      locked: true,
      closed: true,
      teilnehmer: 45,
      spielerzahl: 50,
      anmeldefrist: new Date(),
    },
    {
      name: "Freundschaftsspiel gegen LwJg46",
      datum: new Date(),
      beschreibung: "Freundschaftsspiel gegen LwJg46 Beschreibung",
      locked: false,
      closed: false,
      teilnehmer: 55,
      spielerzahl: 50,
      anmeldefrist: new Date(),
    },
  ];

  getData() {
    return Observable.of(this.data);
  }
}
