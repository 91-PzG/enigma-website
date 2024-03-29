import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import {
  HrWarning,
  HrWarningsService,
} from "../../../@core/data/hrWarnings.service";

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

  constructor(private service: HrWarningsService) {
    this.service.getData().then((data: HrWarning[]) => this.setData(data));
  }

  private setData(data: HrWarning[]) {
    this.source.load(data);
  }
}
