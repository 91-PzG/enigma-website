import { Component } from "@angular/core";
import { NbAuthService } from "@nebular/auth";
import { NbAccessChecker } from "@nebular/security";
import { MENU_ITEMS, NbMenuItemWithPermissions } from "./pages-menu";

@Component({
  selector: "ngx-pages",
  styleUrls: ["./pages.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;

  constructor(
    private authService: NbAuthService,
    private accessChecker: NbAccessChecker
  ) {
    this.filterMenu();
  }

  filterMenu() {
    this.authService.onTokenChange().subscribe(() => {
      this.menu.forEach((item) => this.filterMenuItem(item));
    });
  }

  filterMenuItem(menuItem: NbMenuItemWithPermissions) {
    if (menuItem.access)
      this.accessChecker
        .isGranted(menuItem.access.permission, menuItem.access.resource)
        .subscribe((granted) => {
          menuItem.hidden = !granted;
        });
    else menuItem.hidden = false;

    if (!menuItem.hidden && menuItem.children != null) {
      menuItem.children.forEach((child) => {
        this.filterMenuItem(child);
      });
    }
  }
}
