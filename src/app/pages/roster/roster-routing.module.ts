import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RosterComponent } from "./roster-component/roster-component";

export const routedComponents = [RosterComponent];

const routes: Routes = [
  {
    path: ":id",
    component: RosterComponent,
  },
  { path: "", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RosterRoutingModule {}
