import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "../../../environments/environment";
import { MemberListDto } from "./memberlist.service";

export class Member {
  recruitSince: string | null = "";
  recruitTill: string | null = "";
  memberSince: string | null = "";
  memberTill: string | null = "";
  abteilung: string = "";
  dienstgrad: string = "";
  reserve: boolean = false;
  avatar: string = "";
  rechte: string = "";
  missedEvents: number = 0;
  missedConsecutiveEvents: number = 0;
  comment: string;
  name: string;
  id: string;
}

@Injectable()
export class UserService {
  onUpdate: Subject<MemberListDto> = new Subject<MemberListDto>();

  constructor(private http: HttpClient) {}

  getData(): Promise<Member> {
    return null;
  }

  update(user: MemberListDto) {
    console.log(user);
    return this.http
      .patch(`${environment.api}/users/${user.id}`, user)
      .subscribe(() => this.onUpdate.next(user));
  }
}
