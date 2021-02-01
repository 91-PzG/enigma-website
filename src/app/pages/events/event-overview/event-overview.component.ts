import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HLLEvent, HLLEventData } from "../../../@core/data/hll-event";

@Component({
  selector: "event-overview",
  styleUrls: ["./event-overview.component.scss"],
  templateUrl: "./event-overview.component.html",
})
export class EventOverviewComponent {
  event: HLLEvent;
  anmeldung: { status: string; message?: string } = {
    status: "basic",
  };

  constructor(private service: HLLEventData, private router: Router) {
    const eventId = Number.parseInt(router.url.split("/")[2]);
    service.getData(eventId).subscribe((event) => this.setEvent(event));
  }

  viewSquad() {
    this.router.navigate(["roster", this.event.id]);
  }

  private setEvent(event: HLLEvent) {
    this.event = event;
    this.event.datum = this.parseDate(this.event.datum);
    this.event.anmeldefrist = this.parseDate(this.event.anmeldefrist);
    this.event.vorbesprechung = this.parseDate(this.event.vorbesprechung);

    this.setAnmeldung();
  }

  private parseDate(date: string): string {
    return new Date(date).toLocaleString("de-de").slice(0, -3);
  }

  private setAnmeldung() {
    if (this.event.anmeldung) {
      switch (this.event.anmeldung.type) {
        case "RE":
          this.anmeldung = {
            status: "info",
            message:
              "Du hast dich für das Event auf Reserve gesetzt. Bitte halte dich am Spieltag bereit.",
          };
          break;
        case "AN":
          this.anmeldung = {
            status: "primary",
            message: `Du hast dich für das Event angemeldet${
              this.event.anmeldung.squad
                ? ` und bist in Squad ${this.event.anmeldung.squad} ${this.event.anmeldung.abteilung} eingeteilt`
                : ",aber bist noch nicht eingeteilt"
            }.`,
          };
          break;
        default:
          this.anmeldung = {
            status: "basic",
            message: "Du hast dich für das Event abgemeldet.",
          };
      }
    } else {
      this.anmeldung = {
        status: this.event.verpflichtend ? "warning" : "basic",
        message: "Du hast dich noch nicht für das Event gemeldet!",
      };
    }
  }
}
