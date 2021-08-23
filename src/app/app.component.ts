import { Component } from "@angular/core";
import { NbIconLibraries } from "@nebular/theme";

@Component({
  selector: "app-root",
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = "91.PzG Memberportal";

  constructor(private iconLibraries: NbIconLibraries) {
    this.iconLibraries.registerFontPack("hllroles");
  }
}
