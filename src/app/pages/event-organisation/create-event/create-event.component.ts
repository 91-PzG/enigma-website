import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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
  result = { header: "Creating event...", button: "Try again" };

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
    this.commitEvent();
  }

  commitEvent() {
    this.http
      .post("https://dev.samuelhoera.dev/events", this.eventDto)
      .subscribe(
        (data: any) => {
          this.result.header = "Event successfully created!";
          this.result.button = "View Event";
        },
        (error: HttpErrorResponse) => {
          this.result.header = `${error.status}: ${error.statusText}`;
          console.log(error);
        }
      );
  }

  finalButton() {
    if (this.eventId) console.log("Route to event");
    else this.stepper.reset();
  }
}
