import { Injectable } from "@angular/core";
import { HLLEvent, HLLEventService } from "../data";

@Injectable()
export class HLLEventMockService extends HLLEventService {
  getData(eventId: number) {
    const data: HLLEvent = {
      id: 1,
      name: "Freundschaftsspiel 91/18 vs PBS",
      description:
        "Dank eines Organisationsfehlers, hatten sich zwei Clans schon Zeit für uns genommen.\nDas Glück dabei: PBS stellt stabil 50 Spieler, wir so um die 30 und die 18.PzDiv bis zu 20.\nKurz gerechnet, fällt jedem die optimale Lösung auf.\nWir spielen mit Unterstützung von 3 Squads der 18.PzDiv.\nKarte wurde von PBS ausgesucht, Seite per Münzwurf.\n\nPS: Auch dies Anmeldung ist **verpflichtend**",
      date: "2020-08-22T18:00:00.000Z",
      meetingPoint: "Event Sammelpunkt 19:30",
      server: "Server #2",
      password: "folgt",
      registerByDate: "2020-08-22T18:00:00.000Z",
      maxPlayerCount: 32,
      playerCount: 30,
      mandatory: true,
      locked: true,
      closed: true,
      organisator: "91.sArtl.Reg| Andischa",
      briefing: "2020-08-21T18:00:00.000Z",
      rounds: 1,
      hllMap: "Hurtgen Forest",
      faction: "Achse",
      commander: "offen",
      enrolment: null,
    };

    return Promise.resolve(data);
  }
}
