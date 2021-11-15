import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";

export interface EventChannel {
  name: string;
  id: string;
}

@Injectable()
export class EventChannelService {
  constructor(private http: HttpClient) {}
  getData(): Promise<EventChannel[]> {
    return firstValueFrom<EventChannel[]>(
      this.http.get<EventChannel[]>(`${environment.api}/channels`)
    );
  }
}
