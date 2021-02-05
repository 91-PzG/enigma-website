import { NgModule } from "@angular/core";
import { NbButtonModule, NbCardModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { MiscellaneousRoutingModule } from "./miscellaneous-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { WorkInProgressComponent } from "./work-in-progress/work-in-progress.component";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    MiscellaneousRoutingModule,
  ],
  declarations: [NotFoundComponent, WorkInProgressComponent],
})
export class MiscellaneousModule {}
