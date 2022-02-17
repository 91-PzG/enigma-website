import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from "@angular/core";
import { Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import {
  MemberListDto,
  MemberListService,
  UserService,
} from "../../../@core/data";
import { LocalDatePipe } from "../../../@theme/pipes";
import { EditButtonComponent } from "./editbutton.component";

@Component({
  selector: "memberlist-component",
  styleUrls: ["./memberlist.component.scss"],
  templateUrl: "./memberlist.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberListComponent {
  hideID = true;
  compactList = true;
  fullList = false;

  settings = {
    pager: { display: false },
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      edit: {
        title: "Edit",
        filter: false,
        sort: false,
        type: "custom",
        renderComponent: EditButtonComponent,
        valuePrepareFunction: (value, row, cell) => {
          return row;
        },
      },
      id: {
        title: "ID",
        filter: true,
        hide: this.hideID,
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
      recruitSinceString: {
        title: "Mitglied seit",
        compareFunction: this.customDateSort,
      },
      memberSinceString: {
        title: "Mannschaft seit",
        compareFunction: this.customDateSort,
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

  constructor(
    private service: MemberListService,
    private router: Router,
    private cd: ChangeDetectorRef,
    private userService: UserService
  ) {
    this.service.getData().then((data) => this.setData(data));
    this.userService.onUpdate.subscribe((user) =>
      this.source.update(user, this.prepareMember(user))
    );
  }

  customDateSort(direction: any, a: string, b: string) {
    const convertDate = (date: string) => {
      const split = date.split(".");
      [split[0], split[1]] = [split[1], split[0]];
      return split.join(".");
    };
    const first = convertDate(a);
    const second = convertDate(b);

    if (first < second) {
      return -1 * direction;
    }
    if (first > second) {
      return direction;
    }
    return 0;
  }

  private prepareMember = (entry: MemberListDto) => {
    entry.rank = this.prepareTranslationRank(entry.rank);
    entry.division = this.prepareTranslationDivision(entry.division);
    entry.roles = this.prepareTranslationRoles(entry.roles);
    entry.memberSinceString = this.prepareDate(entry.memberSince);
    entry.recruitSinceString = this.prepareDate(entry.recruitSince);
    entry["edit"] = "<button></button>";
    return entry;
  };

  private setData(data: MemberListDto[]) {
    data = data
      .filter((f) => f.roles !== "{guest}" /*&& f.rank === "recruit"*/)
      .map(this.prepareMember);
    this.source.load(data);
  }

  prepareDate(date: Date): string {
    if (typeof date != "undefined" && date) {
      return this.datePipe.transform(date);
    } else {
      return "-";
    }
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

  updateList(value): void {
    if (value == "full") {
      this.hideID = false;
    } else {
      this.hideID = true;
    }
    this.cd.markForCheck();
  }
}
