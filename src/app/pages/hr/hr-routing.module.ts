import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArchiveComponent } from "./archive/archive.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MemberListComponent } from "./memberlist/memberlist.component";
import { RecruitListComponent } from "./recruitlist/recruitlist.component";

export const routedComponents = [
  DashboardComponent,
  ArchiveComponent,
  MemberListComponent,
  RecruitListComponent,
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
  {
    path: "recruitlist",
    component: RecruitListComponent,
  },
  { path: "archive", component: ArchiveComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrRoutingModule {}
