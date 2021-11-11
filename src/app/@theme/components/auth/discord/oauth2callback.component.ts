import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { NbAuthJWTToken, NbAuthService, NbTokenService } from "@nebular/auth";
import { Subject } from "rxjs";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "oauth2-callback",
  template: `
    <nb-layout>
      <nb-layout-column>Authenticating...</nb-layout-column>
    </nb-layout>
  `,
})
export class OAuth2CallbackComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private authService: NbAuthService,
    private router: Router,
    private http: HttpClient,
    private tokenService: NbTokenService
  ) {
    const token = this.router.url.split("&")[1].split("=")[1];
    this.authenticate(token);
  }

  private authenticate(token: string) {
    this.http
      .get(`${environment.api}/auth/discord`, {
        params: { token },
      })
      .subscribe((enigmaToken: { accessToken: string }) => {
        this.tokenService.set(
          new NbAuthJWTToken(enigmaToken.accessToken, "enigma")
        );
        this.router.navigateByUrl("");
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
