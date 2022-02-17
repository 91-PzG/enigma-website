import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "../../../environments/environment";

export class MemberListDto {
  id: string;
  name: string;
  division: string;
  rank: string;
  memberSince: Date;
  memberSinceString?: string;
  recruitSince: Date;
  recruitSinceString?: string;
  recruitTill: Date;
  memberTill: Date;
  roles: string;
  comment: string;
}

@Injectable()
export class MemberListService {
  constructor(private http: HttpClient) {}
  getData(): Promise<MemberListDto[]> {
    return firstValueFrom<MemberListDto[]>(
      this.http.get<MemberListDto[]>(`${environment.api}/users`)
    );
  }
}
