import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventListComponent } from "./event-list/event-list.component";
import { EventOverviewComponent } from "./event-overview/event-overview.component";

export const routedComponents = [EventOverviewComponent, EventListComponent];

const routes: Routes = [
  {
    path: ":id",
    component: EventOverviewComponent,
  },
  {
    path: "",
    component: EventListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsRoutingModule {}
