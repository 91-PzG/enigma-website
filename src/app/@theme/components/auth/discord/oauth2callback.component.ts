import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import {
  NbAuthJWTToken,
  NbAuthResult,
  NbAuthService,
  NbTokenService,
} from "@nebular/auth";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

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
    this.authService
      .authenticate("discord")
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: NbAuthResult) => {
        if (authResult.isSuccess() && authResult.getRedirect()) {
          this.http
            .get("http://localhost:3333/auth/discord", {
              params: { token: authResult.getResponse().access_token },
            })
            .subscribe((enigmaToken: { accessToken: string }) => {
              this.tokenService.set(
                new NbAuthJWTToken(enigmaToken.accessToken, "enigma")
              );
              this.router.navigateByUrl(authResult.getRedirect());
            });
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
