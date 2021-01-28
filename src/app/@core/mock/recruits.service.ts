import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";
import "rxjs/add/operator/delay";
import { Recruit, RecruitsData } from "../data/recruits";

@Injectable()
export class RecruitsService extends RecruitsData {
  data: Recruit[] = [
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

  getData(): Observable<Recruit[]> {
    return Observable.of(this.data).delay(500);
  }
}
