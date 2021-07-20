import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Roster } from "./roster";

@Injectable()
export class RosterData {
  constructor(private http: HttpClient) {}
  getData(id: number): Observable<Roster> {
    return this.http.get(
      `https://api.91-pzg.de/enrolment/${id}`
    ) as Observable<Roster>;
  }
}
