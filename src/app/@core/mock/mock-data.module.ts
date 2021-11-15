import { ModuleWithProviders, NgModule, Provider } from "@angular/core";
import {
  CurrentManpowerMockService,
  EventChannelMockService,
  EventListMockService,
  HLLEventMockService,
  HLLFactionMockService,
  HrWarningsMockService,
  MemberAutocompleteMockService,
  RecruitsMockService,
  RosterMockService,
  UserMockService,
} from ".";
import {
  CurrentManpowerService,
  EventChannelService,
  EventListService,
  HLLEventService,
  HLLFactionService,
  HLLMapService,
  HrWarningsService,
  MemberAutocompleteService,
  RecruitsService,
  RosterService,
  UserService,
} from "../data";

const SERVICES: Provider[] = [
  { provide: RecruitsService, useClass: RecruitsMockService },
  { provide: HrWarningsService, useClass: HrWarningsMockService },
  { provide: CurrentManpowerService, useClass: CurrentManpowerMockService },
  { provide: EventListService, useClass: EventListMockService },
  { provide: HLLMapService, useClass: HLLEventMockService },
  { provide: HLLFactionService, useClass: HLLFactionMockService },
  { provide: EventChannelService, useClass: EventChannelMockService },
  {
    provide: MemberAutocompleteService,
    useClass: MemberAutocompleteMockService,
  },
  { provide: HLLEventService, useClass: HLLEventMockService },
  { provide: UserService, useClass: UserMockService },
  { provide: RosterService, useClass: RosterMockService },
];

@NgModule({
  providers: [...SERVICES],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders<MockDataModule> {
    return {
      ngModule: MockDataModule,
      providers: [...SERVICES],
    };
  }
}
