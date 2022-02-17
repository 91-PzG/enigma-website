import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbDateFnsDateModule } from "@nebular/date-fns";
import {
  NbButtonGroupModule,
  NbCardModule,
  NbDatepickerModule,
  NbDialogModule,
  NbInputModule,
  NbRadioModule,
  NbToggleModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgxEchartsModule } from "ngx-echarts";
import { ThemeModule } from "../../@theme/theme.module";
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
    NbRadioModule,
    NbToggleModule,
    NbButtonGroupModule,
  ],
  declarations: [
    ...routedComponents,
    EditButtonComponent,
    MemberEditDialogComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HrModule {}
