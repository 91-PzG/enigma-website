import { Injectable } from "@angular/core";

export interface User {
  contact: Contact;
  member?: Member;
}

export interface Contact {
  discordId: string;
  username: string;
  member: boolean;
  comment?: string;
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

@Injectable()
export class UserService {
  getData(): Promise<User> {
    const user: User = {
      contact: {
        discordId: "",
        username: "",
        member: false,
      },
    };

    return Promise.resolve<User>(user);
  }
}
