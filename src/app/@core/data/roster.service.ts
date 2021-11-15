import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";
import { RosterDto } from "../../../util/roster";

@Injectable()
export class RosterService {
  constructor(private http: HttpClient) {}
  getData(id: number): Promise<RosterDto> {
    return firstValueFrom<RosterDto>(
      this.http.get<RosterDto>(`${environment.api}/enrolment/${id}`)
    );
  }
}
