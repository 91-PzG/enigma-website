import { NgModule } from "@angular/core";
import { NbCardModule, NbIconModule, NbInputModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../@theme/theme.module";
import { EVENT_LIST_COMPONENTS } from "./event-list/event-list.component";
import { EventsRoutingModule, routedComponents } from "./events-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    EventsRoutingModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
  ],
  declarations: [...routedComponents, ...EVENT_LIST_COMPONENTS],
})
export class EventsModule {}
