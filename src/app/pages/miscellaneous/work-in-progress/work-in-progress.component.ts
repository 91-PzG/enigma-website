import { Component } from "@angular/core";
import { NbMenuService } from "@nebular/theme";

@Component({
  selector: "work-in-progress",
  styleUrls: ["./work-in-progress.component.scss"],
  templateUrl: "./work-in-progress.component.html",
})
export class WorkInProgressComponent {
  constructor(private menuService: NbMenuService) {}

  goToHome() {
    this.menuService.navigateHome();
  }
}
