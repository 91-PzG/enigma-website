import { Injectable } from "@angular/core";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
import { NbRoleProvider } from "@nebular/security";
import { of } from "rxjs";
import { Observable } from "rxjs/Observable";

@Injectable()
export class RoleProvider implements NbRoleProvider {
  constructor(private authService: NbAuthService) {}

  getRole(): Observable<string[]> {
    let result: string[];
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        result = token.getPayload().roles || ["guest"];
      } else {
        result = ["guest"];
      }
    });
    return of(result);
  }
}
