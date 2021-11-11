import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export interface HLLEvent {
  id: number;
  name: string;
  description: string;
  date: string;
  meetingPoint: string;
  server: string;
  password: string;
  registerByDate: string;
  maxPlayerCount: number;
  playerCount: number;
  organisator: string;
  mandatory: boolean;
  closed: true;
  briefing: string;
  rounds: number;
  hllMap: string;
  faction: string;
  commander: string;
  locked: boolean;
  enrolment: Enrolment | null;
}

export interface Enrolment {
  enrolmentType: string;
  squad: { name: string };
  division: string;
}

@Injectable()
export class HLLEventData {
  constructor(private http: HttpClient) {}
  getData(eventId: number): Observable<HLLEvent> {
    return this.http.get(
      `${environment.api}/events/${eventId}`
    ) as Observable<HLLEvent>;
  }
}
