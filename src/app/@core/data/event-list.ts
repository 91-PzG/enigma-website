import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export interface EventListEntry {
  id: number;
  name: string;
  datum: Date;
  beschreibung: string;
  locked: boolean;
  closed: boolean;
  teilnehmer: number;
  spielerzahl: number;
  anmeldefrist: Date;
}

@Injectable()
export class EventListData {
  constructor(private http: HttpClient) {}
  getData(): Observable<EventListEntry[]> {
    return this.http.get(`${environment.api}/events`) as Observable<
      EventListEntry[]
    >;
  }
}
