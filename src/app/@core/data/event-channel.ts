import { Observable } from "rxjs";

export interface EventChannel {
  name: string;
  id: string;
}

export abstract class EventchannelData {
  abstract getData(): Observable<EventChannel[]>;
}
