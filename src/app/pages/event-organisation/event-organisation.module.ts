import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule,
  NbSelectModule,
  NbSpinnerModule,
  NbStepperModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { CREATE_EVENT_COMPONENTS } from "./create-event/create-event.component";
import {
  EventOrganisationRoutingModule,
  routedComponents,
} from "./event-organisation-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    EventOrganisationRoutingModule,
    NbStepperModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    NbSelectModule,
    NbAutocompleteModule,
    NbSpinnerModule,
    NbDatepickerModule,
  ],
  declarations: [...routedComponents, ...CREATE_EVENT_COMPONENTS],
})
export class EventOrganisationModule {}
