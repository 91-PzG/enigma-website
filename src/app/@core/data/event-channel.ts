import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export interface EventChannel {
  name: string;
  id: string;
}

@Injectable()
export class EventchannelData {
  constructor(private http: HttpClient) {}
  getData(): Observable<EventChannel[]> {
    return this.http.get(`${environment.api}/channels`) as Observable<
      EventChannel[]
    >;
  }
}
