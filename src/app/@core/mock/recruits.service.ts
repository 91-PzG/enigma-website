import { Injectable } from "@angular/core";
import { RecruitsData } from "../data/recruits";

@Injectable()
export class RecruitsService extends RecruitsData {
  data = [
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

  getData() {
    return this.data;
  }
}
