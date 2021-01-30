import { NgModule } from "@angular/core";
import { NbMenuModule, NB_TIME_PICKER_CONFIG } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { UserDetailModule } from "./user-detail/user-detail.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    UserDetailModule,
  ],
  declarations: [PagesComponent],
  providers: [
    {
      provide: NB_TIME_PICKER_CONFIG,
      useValue: {},
    },
  ],
})
export class PagesModule {}
