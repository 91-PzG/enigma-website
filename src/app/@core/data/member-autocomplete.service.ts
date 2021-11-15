import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";

export interface MemberAutocomplete {
  username: string;
  id: string;
}

@Injectable()
export class MemberAutocompleteService {
  constructor(private http: HttpClient) {}

  getData(): Promise<MemberAutocomplete[]> {
    return firstValueFrom<MemberAutocomplete[]>(
      this.http.get<MemberAutocomplete[]>(`${environment.api}/users/list`)
    );
  }
}
