import { NgModule } from "@angular/core";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
} from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { ROSTER_COMPONENTS } from "./roster-component/roster-component";
import { RosterRoutingModule, routedComponents } from "./roster-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    RosterRoutingModule,
  ],
  declarations: [...routedComponents, ...ROSTER_COMPONENTS],
})
export class RosterModule {}
