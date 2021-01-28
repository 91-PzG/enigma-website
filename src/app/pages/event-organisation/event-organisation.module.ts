import { NgModule } from "@angular/core";
import { ThemeModule } from "../../@theme/theme.module";
import {
  EventOrganisationRoutingModule,
  routedComponents,
} from "./event-organisation-routing.module";

@NgModule({
  imports: [ThemeModule, EventOrganisationRoutingModule],
  declarations: [...routedComponents],
})
export class EventOrganisationModule {}
