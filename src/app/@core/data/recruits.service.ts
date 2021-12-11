import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";

export interface Recruit {
  id: string;
  name: string;
  recruitSince: Date;
  recruitTill: Date;
  comment: string;
}

/*@Injectable()
export class RecruitsService {
  getData(): Promise<Recruit[]> {
    return Promise.resolve<Recruit[]>([]);
  }
*/
@Injectable()
export class RecruitsService {
  constructor(private http: HttpClient) {}
  getData(): Promise<Recruit[]> {
    return firstValueFrom<Recruit[]>(
      this.http.get<Recruit[]>(`${environment.api}/users`)
    );
  }
}
