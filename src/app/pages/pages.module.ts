import { NgModule } from "@angular/core";
import { NbMenuModule, NB_TIME_PICKER_CONFIG } from "@nebular/theme";
import { ThemeModule } from "../@theme/theme.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { UserDetailService } from "./user-detail/user-detail.service";

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, NbMenuModule, MiscellaneousModule],
  declarations: [PagesComponent],
  providers: [
    {
      provide: NB_TIME_PICKER_CONFIG,
      useValue: {},
    },
    UserDetailService,
  ],
})
export class PagesModule {}
