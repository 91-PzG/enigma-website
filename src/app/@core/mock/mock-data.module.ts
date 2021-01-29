import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CurrentManpowerService } from "./current-manpower.service";
import { EventChannelService } from "./event-channel.service";
import { EventListService } from "./event-list.service";
import { HLLFactionService } from "./hll-faction.service";
import { HLLMapService } from "./hll-map.service";
import { HrWarningsService } from "./hrWarnings.service";
import { MemberAutocompleteService } from "./member-autocomplete.service";
import { RecruitsService } from "./recruits.service";
import { UserService } from "./users.service";

const SERVICES = [
  UserService,
  RecruitsService,
  HrWarningsService,
  CurrentManpowerService,
  EventListService,
  HLLMapService,
  HLLFactionService,
  EventChannelService,
  MemberAutocompleteService,
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
