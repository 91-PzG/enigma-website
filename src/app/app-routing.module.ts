import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NbAuthComponent, NbLogoutComponent } from "@nebular/auth";
import {
  OAuth2CallbackComponent,
  OAuth2LoginComponent,
} from "./@theme/components";

const routes: Routes = [
  {
    path: "auth",
    component: NbAuthComponent,
    children: [
      {
        path: "callback",
        component: OAuth2CallbackComponent,
      },
      {
        path: "discord",
        component: OAuth2LoginComponent,
      },
      {
        path: "logout",
        component: NbLogoutComponent,
      },
    ],
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
  },
  { path: "**", redirectTo: "home" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
