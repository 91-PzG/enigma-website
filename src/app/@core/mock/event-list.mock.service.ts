import { Injectable } from "@angular/core";
import { EventListEntry, EventListService } from "../data";

@Injectable()
export class EventListMockService extends EventListService {
  getData() {
    const data: EventListEntry[] = [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
    return Promise.resolve(data);
  }
}
