import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { HrWarningsData } from "../../../@core/data/hrWarnings";

@Component({
  selector: "hr-warnings",
  template:
    '<ng2-smart-table [settings]="settings" [source]="source"> </ng2-smart-table>',
})
export class WarningListComponent {
  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      name: {
        title: "Name",
        type: "string",
      },
      missedConsecutiveEvents: {
        title: "Events in Folge verpasst",
        type: "number",
      },
      missedEvents: {
        title: "Events verpasst",
        type: "number",
      },
      comment: {
        title: "Kommentar",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: HrWarningsData) {
    const data = this.service.getData();
    this.source.load(data);
  }
}
