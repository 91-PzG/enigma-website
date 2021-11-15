import { Injectable } from "@angular/core";
import { User, UserService } from "../data/user.service";

@Injectable()
export class UserMockService extends UserService {
  getData() {
    const data: User = {
      contact: {
        discordId: "1232421842346",
        username: "91.PzG| Samu | ThePuppetMaster",
        member: true,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      },
      member: {
        recruitSince: new Date().toString(),
        recruitTill: null,
        memberSince: null,
        memberTill: null,
        abteilung: "Infanterie",
        dienstgrad: "Offizier",
        reserve: false,
        avatar:
          "https://cdn.discordapp.com/avatars/351359487988334593/685c3a9d6bc840b9a1ac0a7f5ed5da0e.png?size=4096",
        rechte: "",
        missedEvents: 1,
        missedConsecutiveEvents: 0,
      },
    };
    return Promise.resolve(data);
  }
}
