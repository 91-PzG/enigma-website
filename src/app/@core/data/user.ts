import { Observable } from "rxjs";

export interface User {
  contact: Contact;
  member?: Member;
}

export interface Contact {
  discordId: string;
  username: string;
  member: boolean;
  comment: string;
}

export interface Member {
  recruitSince: string | null;
  recruitTill: string | null;
  memberSince: string | null;
  memberTill: string | null;
  abteilung: string;
  dienstgrad: string;
  reserve: boolean;
  avatar: string;
  rechte: string;
  missedEvents: number;
  missedConsecutiveEvents: number;
}

export abstract class UserData {
  abstract getData(): Observable<User>;
}
