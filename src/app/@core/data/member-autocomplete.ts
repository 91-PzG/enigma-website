import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export interface MemberAutocomplete {
  username: string;
  id: string;
}

@Injectable()
export class MemberAutocompleteData {
  constructor(private http: HttpClient) {}
  getData(): Observable<MemberAutocomplete[]> {
    return this.http.get(`${environment.api}/users/list`) as Observable<
      MemberAutocomplete[]
    >;
  }
}
