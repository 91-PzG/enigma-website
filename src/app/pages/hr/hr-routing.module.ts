import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkInProgressComponent } from "../miscellaneous/work-in-progress/work-in-progress.component";
import { ArchiveComponent } from "./archive/archive.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MemberListComponent } from "./memberlist/memberlist.component";

export const routedComponents = [
  DashboardComponent,
  ArchiveComponent,
  MemberListComponent,
];

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "memberlist",
    component: MemberListComponent,
  },
  { path: "archive", component: WorkInProgressComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
