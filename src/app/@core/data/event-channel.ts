import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface EventChannel {
  name: string;
  id: string;
}

@Injectable()
export class EventchannelData {
  constructor(private http: HttpClient) {}
  getData(): Observable<EventChannel[]> {
    return this.http.get("https://dev.samuelhoera.dev/channels") as Observable<
      EventChannel[]
    >;
  }
}
