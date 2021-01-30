import { NgModule } from "@angular/core";
import { NbButtonModule, NbCardModule, NbIconModule } from "@nebular/theme";
import { ThemeModule } from "../../@theme/theme.module";
import { UserDetailComponent } from "./user-detail-component/user-detail.component";
import { UserDetailService } from "./user-detail.service";

@NgModule({
  imports: [ThemeModule, NbCardModule, NbIconModule, NbButtonModule],
  declarations: [UserDetailComponent],
  providers: [UserDetailService],
})
export class UserDetailModule {}
