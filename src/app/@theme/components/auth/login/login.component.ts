import { Component } from "@angular/core";
import { NbLoginComponent } from "@nebular/auth";

@Component({
  selector: "login-component",
  templateUrl: "./login.component.html",
})
export class LoginComponent extends NbLoginComponent {}
