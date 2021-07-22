import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Roster } from "./roster";

@Injectable()
export class RosterData {
  constructor(private http: HttpClient) {}
  getData(id: number): Observable<Roster> {
    return this.http.get(
      `${environment.api}/enrolment/${id}`
    ) as Observable<Roster>;
  }
}
