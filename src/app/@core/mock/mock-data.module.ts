import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
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
} from ".";

const SERVICES = [
  RecruitsService,
  HrWarningsService,
  CurrentManpowerService,
  EventListService,
  HLLMapService,
  HLLFactionService,
  EventChannelService,
  MemberAutocompleteService,
  HLLEventService,
  UserService,
  RosterService,
];

@NgModule({
  imports: [CommonModule],
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
