import { DragDropModule } from "@angular/cdk/drag-drop";
import { NgModule } from "@angular/core";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbSpinnerModule,
  NbTabsetModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { ROSTER_COMPONENTS } from "./roster-component/roster-component";
import { RosterDataService } from "./roster-data.service";
import { RosterRoutingModule, routedComponents } from "./roster-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbTabsetModule,
    NbSpinnerModule,
    RosterRoutingModule,
    DragDropModule,
  ],
  declarations: [...routedComponents, ...ROSTER_COMPONENTS],
  providers: [RosterDataService],
})
export class RosterModule {}
