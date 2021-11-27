import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { MemberListDto, MemberListService } from "../../../@core/data";
import { LocalDatePipe } from "../../../@theme/pipes";

@Component({
  selector: "memberlist-component",
  styleUrls: ["./memberlist.component.scss"],
  templateUrl: "./memberlist.component.html",
})
export class MemberListComponent {
  settings = {
    pager: { display: false },
    actions: {
      add: false,
      edit: true,
      delete: false,
    },
    columns: {
      id: {
        title: "ID",
        filter: true,
        hide: true,
      },
      name: {
        title: "Name",
        filter: true,
      },

      division: {
        title: "Abteilung",
        filter: true,
      },
      rank: {
        title: "Rang",
        filter: true,
      },
      roles: {
        title: "Rollen",
        filter: true,
      },
      recruitSince: {
        title: "Rekrut seit",
        valuePrepareFunction: this.prepareDate.bind(this),
      },
      memberSince: {
        title: "Mitglied seit",
        valuePrepareFunction: this.prepareDate.bind(this),
      },
      comment: {
        title: "Bemerkungen",
        filter: false,
        hide: true,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  datePipe = new LocalDatePipe();

  constructor(private service: MemberListService, private router: Router) {
    this.service.getData().then((data) => this.setData(data));
  }
  private setData(data: MemberListDto[]) {
    data = data.map((entry) => {
      entry.rank = this.prepareTranslationRank(entry.rank);
      entry.division = this.prepareTranslationDivision(entry.division);
      entry.roles = this.prepareTranslationRoles(entry.roles);
      return entry;
    });
    this.source.load(data);
  }
  prepareDate(date: string): string {
    return this.datePipe.transform(date);
  }
  prepareTranslationRank(text: string): string {
    switch (text) {
      case "recruit":
        return "Rekrut";
      case "soldier":
        return "Mannschaft";
      case "clanrat":
        return "Clanrat";
      case "corporal":
        return "Korporal";
      default:
        return text;
    }
  }
  prepareTranslationDivision(text: string): string {
    switch (text) {
      case "recon":
        return "Aufklärer";
      case "infanterie":
        return "Infanterie";
      case "armor":
        return "Panzer";
      case "artillery":
        return "Artillerie";
      default:
        return text;
    }
  }
  prepareTranslationRoles(text: string): string {
    return text
      .slice(1, -1)
      .split(",")
      .map((role) => {
        return this.translaterole(role);
      })
      .join(", ");
  }
  private translaterole(text: string): string {
    switch (text) {
      case "member":
        return "Clanmitglied";
      case "eventorga":
        return "Eventorganisation";
      case "hr":
        return "Personalabteilung";
      case "clanrat":
        return "Clanrat";
      default:
        return text;
    }
  }
}
