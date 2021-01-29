import { CommonModule } from "@angular/common";
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import { NbAuthModule, NbDummyAuthStrategy } from "@nebular/auth";
import { NbRoleProvider, NbSecurityModule } from "@nebular/security";
import { of as observableOf } from "rxjs";
import { CurrentManpowerData } from "./data/current-manpower";
import { EventchannelData } from "./data/event-channel";
import { EventListData } from "./data/event-list";
import { HLLFactionData } from "./data/hll-faction";
import { HLLMapData } from "./data/hll-map";
import { HrWarningsData } from "./data/hrWarnings";
import { MemberAutocompleteData } from "./data/member-autocomplete";
import { RecruitsData } from "./data/recruits";
import { UserData } from "./data/users";
import { CurrentManpowerService } from "./mock/current-manpower.service";
import { EventChannelService } from "./mock/event-channel.service";
import { EventListService } from "./mock/event-list.service";
import { HLLFactionService } from "./mock/hll-faction.service";
import { HLLMapService } from "./mock/hll-map.service";
import { HrWarningsService } from "./mock/hrWarnings.service";
import { MemberAutocompleteService } from "./mock/member-autocomplete.service";
import { MockDataModule } from "./mock/mock-data.module";
import { RecruitsService } from "./mock/recruits.service";
import { UserService } from "./mock/users.service";
import { throwIfAlreadyLoaded } from "./module-import-guard";
import { LayoutService, StateService } from "./utils";

type SocialLinks = { url: string; target: string; icon: string }[];
const socialLinks: SocialLinks = [
  {
    url: "https://github.com/hoersamu/enigma-website",
    target: "_blank",
    icon: "github",
  },
];

const DATA_SERVICES = [
  { provide: UserData, useClass: UserService },
  { provide: RecruitsData, useClass: RecruitsService },
  { provide: HrWarningsData, useClass: HrWarningsService },
  //{provide: HLLEventData,useClass:HLLEventS},
  { provide: CurrentManpowerData, useClass: CurrentManpowerService },
  { provide: EventListData, useClass: EventListService },
  { provide: HLLMapData, useClass: HLLMapService },
  { provide: HLLFactionData, useClass: HLLFactionService },
  { provide: EventchannelData, useClass: EventChannelService },
  { provide: MemberAutocompleteData, useClass: MemberAutocompleteService },
];

export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role base on any auth flow
    return observableOf("guest");
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({
    strategies: [
      NbDummyAuthStrategy.setup({
        name: "email",
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,
  ...NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: "*",
      },
      user: {
        parent: "guest",
        create: "*",
        edit: "*",
        remove: "*",
      },
    },
  }).providers,
  { provide: NbRoleProvider, useClass: NbSimpleRoleProvider },
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
