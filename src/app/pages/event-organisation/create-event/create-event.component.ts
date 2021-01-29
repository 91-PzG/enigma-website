import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NbStepperComponent } from "@nebular/theme";
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

  constructor(private router: Router, private http: HttpClient) {}

  next(dto: DiscordForm | InfoForm | OverviewForm | GameForm) {
    Object.entries(dto).forEach(([key, value]) => (this.eventDto[key] = value));
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }

  submit(dto: DiscordForm) {
    this.sending = true;
    setTimeout(() => (this.sending = false), 1000);
    this.next(dto);
    console.log(this.eventDto);
  }

  commitEvent() {}

  viewEvent() {
    console.log("Route to event");
  }
}
