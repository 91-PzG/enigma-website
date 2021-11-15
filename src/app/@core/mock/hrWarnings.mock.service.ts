import { Injectable } from "@angular/core";
import { HrWarningsService } from "../data/hrWarnings.service";

@Injectable()
export class HrWarningsMockService extends HrWarningsService {
  getData() {
    const data = [
      {
        name: "Andischa",
        missedConsecutiveEvents: 1,
        missedEvents: 2,
        comment: "It",
      },
      {
        name: "Samu | ThePuppetMaster",
        missedConsecutiveEvents: 3,
        missedEvents: 3,
        comment: "just",
      },
      {
        name: "Blaulicht",
        missedConsecutiveEvents: 5,
        missedEvents: 6,
        comment: "works",
      },
    ];
    return Promise.resolve(data);
  }
}
