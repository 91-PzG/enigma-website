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
    return this.http.get("https://api.91pzg.de/channels") as Observable<
      EventChannel[]
    >;
  }
}
