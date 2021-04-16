import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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
    return this.http.get("https://api.91pzg.de/") as Observable<
      EventListEntry[]
    >;
  }
}
