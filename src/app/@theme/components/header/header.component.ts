import { Component, OnDestroy, OnInit } from "@angular/core";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import {
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";
import { Subject } from "rxjs";
import { filter, map, takeUntil } from "rxjs/operators";
import { LayoutService } from "../../../@core/utils";
import { UserDetailService } from "../../../pages/user-detail/user-detail.service";

type ThemesMap = { value: string; name: string }[];

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: { username?: string; avatar?: string; id?: string } = {
    avatar: "assets/images/avatar.png",
  };

  themeMap = ["default", "dark", "cosmic"];
  themes: ThemesMap = [
    {
      value: "default",
      name: " Light",
    },
    { value: "dark", name: "Dark" },
    { value: "cosmic", name: "Cosmic" },
  ];

  currentTheme: string;
  private themeKey = "THEME";

  userMenu: NbMenuItem[] = [
    { title: "Profile" },
    { title: "Log in", link: "auth/login" },
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private authService: NbAuthService,
    private userService: UserDetailService
  ) {
    this.authHandling();
    this.profileHandling();
  }

  ngOnInit(): void {
    this.getLocalTheme();
    this.currentTheme = this.themeService.currentTheme;
    this.themeHandling();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string): void {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome(): boolean {
    this.menuService.navigateHome();
    return false;
  }

  private authHandling() {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.login();
      } else {
        this.user.avatar = "assets/images/avatar.png";
        this.logout();
      }
    });
  }

  private themeHandling() {
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => {
        this.currentTheme = themeName;
        this.setLocalTheme(themeName);
      });
  }

  private profileHandling() {
    this.menuService
      .onItemClick()
      .pipe(filter(({ item }) => item.title === "Profile"))
      .subscribe(() => this.userService.openDialog());
  }

  private login() {
    this.userMenu[1] = { title: "Log out", link: "auth/logout" };
  }

  private logout() {
    this.userMenu[1] = { title: "Log in", link: "auth/login" };
  }

  private setLocalTheme(theme: string) {
    localStorage.setItem(this.themeKey, theme);
  }

  private getLocalTheme() {
    let storedTheme = localStorage.getItem(this.themeKey);
    if (this.themeMap.includes(storedTheme)) this.changeTheme(storedTheme);
  }
}
