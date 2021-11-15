import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
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
export class EventListService {
  constructor(private http: HttpClient) {}
  getData(): Promise<EventListEntry[]> {
    return firstValueFrom<EventListEntry[]>(
      this.http.get<EventListEntry[]>(`${environment.api}/events`)
    );
  }
}
