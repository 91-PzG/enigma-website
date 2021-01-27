import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { RecruitsData } from "../../../@core/data/recruits";

@Component({
  selector: "hr-recruits",
  template:
    '<ng2-smart-table [settings]="settings" [source]="source"> </ng2-smart-table>',
})
export class RecruitsComponent {
  settings = {
    hideSubHeader: true,
    actions: false,
    columns: {
      name: {
        title: "Name",
        type: "string",
      },
      recruitSince: {
        title: "Rekrut seit",
        type: "date",
      },
      recruitTill: {
        title: "Rekrut bis",
        type: "date",
      },
      comment: {
        title: "Kommentar",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: RecruitsData) {
    const data = this.service.getData();
    this.source.load(data);
  }
}
