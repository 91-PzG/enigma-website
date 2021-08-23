import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnDestroy } from "@angular/core";
import { NbAuthOAuth2Token } from "@nebular/auth";
import { Subject } from "rxjs";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: "oauth2-login",
  template: ` Redirecting to Discord `,
})
export class OAuth2LoginComponent implements OnDestroy {
  token: NbAuthOAuth2Token;

  private destroy$ = new Subject<void>();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.login();
  }

  login() {
    const discordAuthUrl = `${environment.discordOauth2.endpoint}?client_id=${environment.discordOauth2.clientId}&redirect_uri=${environment.discordOauth2.redirectUri}&response_type=${environment.discordOauth2.responseType}&scope=${environment.discordOauth2.scope}`;

    this.document.location.href = discordAuthUrl;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
