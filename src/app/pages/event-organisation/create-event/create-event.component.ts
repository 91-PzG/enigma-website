import { Component, OnInit, ViewChild } from "@angular/core";
import { NbStepperComponent } from "@nebular/theme";
import { InfoFormComponent } from "./info-form/info-form.component";
import { OverviewFormComponent } from "./overview-form/overview-form.component";
import { SpielFormComponent } from "./spiel-form/spiel-form.component";

export const CREATE_EVENT_COMPONENTS = [
  OverviewFormComponent,
  InfoFormComponent,
  SpielFormComponent,
];

@Component({
  selector: "create-event",
  styleUrls: ["./create-event.component.scss"],
  templateUrl: "./create-event.component.html",
})
export class CreateEventComponent implements OnInit {
  @ViewChild("stepper") stepper: NbStepperComponent;

  constructor() {}

  ngOnInit() {}

  next() {
    this.stepper.next();
  }

  previous() {
    this.stepper.previous();
  }
}
