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
import {
  CurrentManpowerData,
  EventchannelData,
  EventListData,
  HLLEventData,
  HLLFactionData,
  HLLMapData,
  HrWarningsData,
  MemberAutocompleteData,
  RecruitsData,
  UserData,
} from "./data";
import { RosterData } from "./data/roster";
import {
  CurrentManpowerService,
  HLLFactionService,
  HLLMapService,
  HrWarningsService,
  RecruitsService,
  UserService,
} from "./mock";
import { MockDataModule } from "./mock/mock-data.module";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { accessControl, RoleProvider } from "./security";
import { LayoutService, StateService } from "./utils";

const DATA_MOCK_SERVICES = [
  { provide: RecruitsData, useClass: RecruitsService },
  { provide: HrWarningsData, useClass: HrWarningsService },
  //{ provide: HLLEventData, useClass: HLLEventService },
  HLLEventData,
  { provide: CurrentManpowerData, useClass: CurrentManpowerService },
  //{ provide: EventListData, useClass: EventListService },
  EventListData,
  { provide: HLLMapData, useClass: HLLMapService },
  { provide: HLLFactionData, useClass: HLLFactionService },
  //{ provide: EventchannelData, useClass: EventChannelService },
  EventchannelData,
  //{ provide: MemberAutocompleteData, useClass: MemberAutocompleteService },
  MemberAutocompleteData,
  { provide: UserData, useClass: UserService },
  //{ provide: RosterData, useClass: RosterService },
  RosterData,
];

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_MOCK_SERVICES,
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
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
