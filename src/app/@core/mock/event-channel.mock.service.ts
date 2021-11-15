import { Injectable } from "@angular/core";
import { EventChannel, EventChannelService } from "../data";

@Injectable()
export class EventChannelMockService extends EventChannelService {
  getData() {
    const data: EventChannel[] = [
      { name: "externe-events", id: "702217421691420812" },
      { name: "event-news", id: "695722618711441468" },
      { name: "trainings-der-91", id: "669480421758861342" },
      { name: "trainingsinhalte", id: "782656770916483072" },
      { name: "deutsche-liga", id: "667366006833807370" },
      { name: "06-02-freundschaftsspiel-gegen-38", id: "801184464725475338" },
      { name: "logistikcup", id: "803625467953152031" },
      { name: "30-01-freundschaftsspiel-gegen-23", id: "804105680964288592" },
    ];
    return Promise.resolve(data);
  }
}
