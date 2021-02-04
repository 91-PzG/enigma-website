import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { WorkInProgressComponent } from "./miscellaneous/work-in-progress/work-in-progress.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "members", component: WorkInProgressComponent },
      { path: "calendar", component: WorkInProgressComponent },
      {
        path: "events",
        loadChildren: () =>
          import("./events/events.module").then((m) => m.EventsModule),
      },
      {
        path: "roster",
        loadChildren: () =>
          import("./roster/roster.module").then((m) => m.RosterModule),
      },
      {
        path: "hr",
        loadChildren: () => import("./hr/hr.module").then((m) => m.HrModule),
      },
      {
        path: "eo",
        loadChildren: () =>
          import("./event-organisation/event-organisation.module").then(
            (m) => m.EventOrganisationModule
          ),
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
