import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import { HLLEvent, HLLEventData } from "../data/hll-event";

@Injectable()
export class HLLEventService extends HLLEventData {
  data: HLLEvent[] = [
    /*
    {
      id: 1,
      name: "Freundschaftsspiel 91/18 vs PBS",
      beschreibung:
        "Dank eines Organisationsfehlers, hatten sich zwei Clans schon Zeit für uns genommen.\nDas Glück dabei: PBS stellt stabil 50 Spieler, wir so um die 30 und die 18.PzDiv bis zu 20.\nKurz gerechnet, fällt jedem die optimale Lösung auf.\nWir spielen mit Unterstützung von 3 Squads der 18.PzDiv.\nKarte wurde von PBS ausgesucht, Seite per Münzwurf.\n\nPS: Auch dies Anmeldung ist **verpflichtend**",
      datum: "2020-08-22T18:00:00.000Z",
      treffpunkt: "Event Sammelpunkt 19:30",
      server: "Server #2",
      passwort: "folgt",
      anmeldefrist: "2020-08-22T18:00:00.000Z",
      spielerzahl: 32,
      teilnehmer: 34,
      verpflichtend: true,
      locked: true,
      closed: true,
      organisator: "91.sArtl.Reg| Andischa",
      vorbesprechung: "2020-08-21T18:00:00.000Z",
      runden: 1,
      karte: "Hurtgen Forest",
      seite: "Achse",
      kommandant: "offen",
      anmeldung: null,
    },
    {
      id: 2,
      name: "Freundschaftsspiel 91/18 vs PBS",
      beschreibung:
        "Dank eines Organisationsfehlers, hatten sich zwei Clans schon Zeit für uns genommen.\nDas Glück dabei: PBS stellt stabil 50 Spieler, wir so um die 30 und die 18.PzDiv bis zu 20.\nKurz gerechnet, fällt jedem die optimale Lösung auf.\nWir spielen mit Unterstützung von 3 Squads der 18.PzDiv.\nKarte wurde von PBS ausgesucht, Seite per Münzwurf.\n\nPS: Auch dies Anmeldung ist **verpflichtend**",
      datum: "2020-08-22T18:00:00.000Z",
      treffpunkt: "Event Sammelpunkt 19:30",
      server: "Server #2",
      passwort: "folgt",
      anmeldefrist: "2020-08-22T18:00:00.000Z",
      spielerzahl: 32,
      teilnehmer: 34,
      verpflichtend: true,
      locked: true,
      closed: true,
      organisator: "91.sArtl.Reg| Andischa",
      vorbesprechung: "2020-08-21T18:00:00.000Z",
      runden: 1,
      karte: "Hurtgen Forest",
      seite: "Achse",
      kommandant: "offen",
      anmeldung: {
        type: "AB",
        abteilung: "Infanterie",
        squad: null,
      },
    },
    {
      id: 3,
      name: "Freundschaftsspiel 91/18 vs PBS",
      beschreibung:
        "Dank eines Organisationsfehlers, hatten sich zwei Clans schon Zeit für uns genommen.\nDas Glück dabei: PBS stellt stabil 50 Spieler, wir so um die 30 und die 18.PzDiv bis zu 20.\nKurz gerechnet, fällt jedem die optimale Lösung auf.\nWir spielen mit Unterstützung von 3 Squads der 18.PzDiv.\nKarte wurde von PBS ausgesucht, Seite per Münzwurf.\n\nPS: Auch dies Anmeldung ist **verpflichtend**",
      datum: "2020-08-22T18:00:00.000Z",
      treffpunkt: "Event Sammelpunkt 19:30",
      server: "Server #2",
      passwort: "folgt",
      anmeldefrist: "2020-08-22T18:00:00.000Z",
      spielerzahl: 32,
      teilnehmer: 34,
      verpflichtend: true,
      locked: true,
      closed: true,
      organisator: "91.sArtl.Reg| Andischa",
      vorbesprechung: "2020-08-21T18:00:00.000Z",
      runden: 1,
      karte: "Hurtgen Forest",
      seite: "Achse",
      kommandant: "offen",
      anmeldung: {
        type: "AN",
        abteilung: "Infanterie",
        squad: "1",
      },
    },
    {
      id: 4,
      name: "Freundschaftsspiel 91/18 vs PBS",
      beschreibung:
        "Dank eines Organisationsfehlers, hatten sich zwei Clans schon Zeit für uns genommen.\nDas Glück dabei: PBS stellt stabil 50 Spieler, wir so um die 30 und die 18.PzDiv bis zu 20.\nKurz gerechnet, fällt jedem die optimale Lösung auf.\nWir spielen mit Unterstützung von 3 Squads der 18.PzDiv.\nKarte wurde von PBS ausgesucht, Seite per Münzwurf.\n\nPS: Auch dies Anmeldung ist **verpflichtend**",
      datum: "2020-08-22T18:00:00.000Z",
      treffpunkt: "Event Sammelpunkt 19:30",
      server: "Server #2",
      passwort: "folgt",
      anmeldefrist: "2020-08-22T18:00:00.000Z",
      spielerzahl: 32,
      teilnehmer: 34,
      verpflichtend: true,
      locked: true,
      closed: true,
      organisator: "91.sArtl.Reg| Andischa",
      vorbesprechung: "2020-08-21T18:00:00.000Z",
      runden: 1,
      karte: "Hurtgen Forest",
      seite: "Achse",
      kommandant: "offen",
      anmeldung: {
        type: "RE",
        abteilung: "Infanterie",
        squad: "2",
      },
    },*/
  ];

  getData(eventId: number): Observable<HLLEvent> {
    return Observable.of(this.data[eventId % 4]);
  }
}
