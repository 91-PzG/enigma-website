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

const DATA_SERVICES = [
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
];

@NgModule({
  providers: [...DATA_SERVICES],
})
export class DataModule {
  static forRoot(): ModuleWithProviders<DataModule> {
    return {
      ngModule: DataModule,
      providers: [...DATA_SERVICES],
    };
  }
}
