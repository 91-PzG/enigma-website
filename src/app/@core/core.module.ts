import { CommonModule } from "@angular/common";
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import {
  NbAuthJWTToken,
  NbAuthModule,
  NbPasswordAuthStrategy,
} from "@nebular/auth";
import { NbRoleProvider, NbSecurityModule } from "@nebular/security";
import { environment } from "../../environments/environment";
import { DataModule } from "./data/data.module";
import { MockDataModule } from "./mock/mock-data.module";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { accessControl, RoleProvider } from "./security";
import { LayoutService, StateService } from "./utils";

const DATA_MODULE: ModuleWithProviders<DataModule | MockDataModule> =
  environment.mockApi ? MockDataModule.forRoot() : DataModule.forRoot();

const CORE_PROVIDERS = [
  ...DATA_MODULE.providers,
  ...NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: "enigma",
        token: { class: NbAuthJWTToken, key: "accessToken" },
        logout: {
          endpoint: "",
        },
      }),
    ],
    forms: {
      logout: {
        redirectDelay: 0,
        strategy: "enigma",
      },
    },
  }).providers,
  ...NbSecurityModule.forRoot({
    accessControl,
  }).providers,
  { provide: NbRoleProvider, useClass: RoleProvider },
  LayoutService,
  StateService,
];

@NgModule({
  imports: [CommonModule],
  exports: [NbAuthModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS],
    };
  }
}
