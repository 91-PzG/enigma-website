import { NgModule } from "@angular/core";
import { NbCardModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgxEchartsModule } from "ngx-echarts";
import { ThemeModule } from "../../@theme/theme.module";
import { DASHBOARD_COMPONENTS } from "./dashboard/dashboard.component";
import { HrRoutingModule, routedComponents } from "./hr-routing.module";

@NgModule({
  imports: [
    ThemeModule,
    HrRoutingModule,
    NgxEchartsModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
  declarations: [...routedComponents, ...DASHBOARD_COMPONENTS],
})
export class HrModule {}
