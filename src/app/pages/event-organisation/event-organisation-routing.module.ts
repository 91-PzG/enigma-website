import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event/create-event.component";

export const routedComponents = [CreateEventComponent];

const routes: Routes = [
  {
    path: "create",
    component: CreateEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventOrganisationRoutingModule {}
