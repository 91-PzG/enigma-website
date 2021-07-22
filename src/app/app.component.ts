import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { NbIconLibraries } from "@nebular/theme";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "91.PzG Memberportal";

  constructor(
    private iconLibraries: NbIconLibraries,
    private domSanitizer: DomSanitizer
  ) {
    this.iconLibraries.registerSvgPack("roles", {
      antiTank: '<img src="../assets/role_icons/ico_HLLAntiTank.svg">',
    });
  }
}
