import { Injectable } from "@angular/core";
import { Recruit, RecruitsService } from "../data/recruits.service";

@Injectable()
export class RecruitsMockService extends RecruitsService {
  getData() {
    const data: Recruit[] = [
      {
        name: "Grenack",
        recruitSince: new Date(),
        recruitTill: new Date(),
        comment: "Hans",
      },
      {
        name: "ChrisEF162",
        recruitSince: new Date(),
        recruitTill: new Date(),
        comment: "get",
      },
      {
        name: "LiquidPoison",
        recruitSince: new Date(),
        recruitTill: new Date(),
        comment: "ze",
      },
      {
        name: "-Killer-",
        recruitSince: new Date(),
        recruitTill: new Date(),
        comment: "Flammenwerfer",
      },
      {
        name: "Engordge | Alex",
        recruitSince: new Date(),
        recruitTill: new Date(),
        comment: " Now",
      },
      {
        name: "JohnBo99",
        recruitSince: new Date(),
        recruitTill: new Date(),
        comment: "!",
      },
    ];
    return Promise.resolve(data);
  }
}
