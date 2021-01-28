import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "../miscellaneous/not-found/not-found.component";

export const routedComponents = [];

const routes: Routes = [
  {
    path: "create",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventOrganisationRoutingModule {}
