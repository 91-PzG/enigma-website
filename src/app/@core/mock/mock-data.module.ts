import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CurrentManpowerService } from "./current-manpower.service";
import { EventListService } from "./event-list.service";
import { HrWarningsService } from "./hrWarnings.service";
import { RecruitsService } from "./recruits.service";
import { UserService } from "./users.service";

const SERVICES = [
  UserService,
  RecruitsService,
  HrWarningsService,
  CurrentManpowerService,
  EventListService,
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
