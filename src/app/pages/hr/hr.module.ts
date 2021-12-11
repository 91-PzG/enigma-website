import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbDateFnsDateModule } from "@nebular/date-fns";
import {
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbInputModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgxEchartsModule } from "ngx-echarts";
import { ThemeModule } from "../../@theme/theme.module";
import { DASHBOARD_COMPONENTS } from "./dashboard/dashboard.component";
import { HrRoutingModule, routedComponents } from "./hr-routing.module";
import { EditButtonComponent } from "./memberlist/editbutton.component";
import { MemberEditDialogComponent } from "./memberlist/member-edit-dialog/member-edit-dialog.component";

@NgModule({
  imports: [
    ThemeModule,
    HrRoutingModule,
    NgxEchartsModule,
    NbCardModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    FormsModule,
    NbInputModule,
    ReactiveFormsModule,
    NbDialogModule.forChild(),
    NbDateFnsDateModule,
  ],
  declarations: [
    ...routedComponents,
    ...DASHBOARD_COMPONENTS,
    EditButtonComponent,
    MemberEditDialogComponent,
  ],
})
export class HrModule {}
