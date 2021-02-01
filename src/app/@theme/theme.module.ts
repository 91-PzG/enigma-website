import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NbAuthModule } from "@nebular/auth";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbSecurityModule } from "@nebular/security";
import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbUserModule,
} from "@nebular/theme";
import { FooterComponent, HeaderComponent, LoginComponent } from "./components";
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from "./layouts";
import { LocalDatePipe } from "./pipes";
import { COSMIC_THEME, DARK_THEME, DEFAULT_THEME } from "./styles";

const NB_MODULES = [
  FormsModule,
  NbAuthModule,
  NbAlertModule,
  NbInputModule,
  NbCheckboxModule,
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  LoginComponent,
];
const PIPES = [LocalDatePipe];

@NgModule({
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: "default",
          },
          [DEFAULT_THEME, COSMIC_THEME, DARK_THEME]
        ).providers,
      ],
    };
  }
}
