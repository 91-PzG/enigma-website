import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NbStepperComponent } from "@nebular/theme";
import { environment } from "../../../../environments/environment";
import {
  DiscordComponent,
  DiscordForm,
} from "./discord-form/discord-form.component";
import { InfoForm, InfoFormComponent } from "./info-form/info-form.component";
import {
  OverviewForm,
  OverviewFormComponent,
} from "./overview-form/overview-form.component";
import {
  GameForm,
  SpielFormComponent,
} from "./spiel-form/spiel-form.component";

export const CREATE_EVENT_COMPONENTS = [
  OverviewFormComponent,
  InfoFormComponent,
  SpielFormComponent,
  DiscordComponent,
];

@Component({
  selector: "create-event",
  styleUrls: ["./create-event.component.scss"],
  templateUrl: "./create-event.component.html",
})
export class CreateEventComponent {
  @ViewChild("stepper") stepper: NbStepperComponent;
  eventId: number;
  sending = false;

  eventDto = {};
  controlDto = {};
  result = { header: "Creating event...", button: "Try again" };

  constructor(private router: Router, private http: HttpClient) {}

  discordNext(dto: DiscordForm) {
    this.eventDto["mandatory"] = dto.mandatory;
    this.eventDto["singlePool"] = dto.singlePool;
    this.eventDto["channelName"] = dto.channel.name;
    if (!dto.sendToDiscord) this.eventDto["autoPublishDate"] = dto.publishDate;

    this.controlDto["publish"] = dto.sendToDiscord;

    this.stepper.next();
    this.submit();
  }

  infoNext(dto: InfoForm) {
    this.eventDto["meetingPoint"] = dto.treffpunkt;
    this.eventDto["server"] = dto.server;
    this.eventDto["password"] = dto.passwort;
    this.eventDto["briefing"] = dto.vorbesprechung;
    this.eventDto["maxPlayerCount"] = dto.spielerzahl;

    this.stepper.next();
  }

  overviewNext(dto: OverviewForm) {
    this.eventDto["name"] = dto.name;
    this.eventDto["date"] = dto.datum;
    this.eventDto["description"] = dto.beschreibung;
    this.eventDto["registerByDate"] = dto.anmeldefrist;

    this.controlDto["organisator"] = dto.organisator;

    this.stepper.next();
  }

  gameNext(dto: GameForm) {
    this.eventDto["commander"] = dto.kommandant;
    this.eventDto["rounds"] = dto.runden;
    this.eventDto["hllMap"] = dto.karte;
    this.eventDto["faction"] = dto.seite;

    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  submit() {
    this.sending = true;
    setTimeout(() => (this.sending = false), 1000);
    this.commitEvent();
  }

  commitEvent() {
    this.http
      .post(`${environment.api}/events`, {
        data: this.eventDto,
        control: this.controlDto,
      })
      .subscribe(
        (data: any) => {
          this.eventId = data.id;
          this.result.header = "Event successfully created!";
          this.result.button = "View Event";
        },
        (error: HttpErrorResponse) => {
          this.result.header = `${error.status}: ${error.statusText}`;
        }
      );
  }

  finalButton() {
    if (this.eventId) this.router.navigate(["events", this.eventId]);
    else this.stepper.reset();
  }
}
