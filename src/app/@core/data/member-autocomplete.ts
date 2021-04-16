import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface MemberAutocomplete {
  username: string;
  id: string;
}

@Injectable()
export class MemberAutocompleteData {
  constructor(private http: HttpClient) {}
  getData(): Observable<MemberAutocomplete[]> {
    return this.http.get("https://api.91pzg.de/users/list") as Observable<
      MemberAutocomplete[]
    >;
  }
}
