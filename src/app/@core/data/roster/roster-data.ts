import { Observable } from "rxjs";
import { Roster } from "./roster";

export abstract class RosterData {
  abstract getData(id: number): Observable<Roster>;
}
