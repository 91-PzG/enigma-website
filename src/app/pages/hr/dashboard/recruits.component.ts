import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Recruit, RecruitsService } from "../../../@core/data/recruits.service";

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

  constructor(private service: RecruitsService) {
    this.service.getData().then((data: Recruit[]) => this.setData(data));
  }

  private setData(data: Recruit[]) {
    this.source.load(data);
  }
}
