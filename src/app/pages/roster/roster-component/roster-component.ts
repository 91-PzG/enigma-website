import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NbAccessChecker } from "@nebular/security";
import { NbDialogService } from "@nebular/theme";
import { CreateSquadComponent } from "../create-squad/create-squad.component";
import { RosterSocketService } from "../roster-data.service";
import { RosterSquadComponent } from "../roster-squad/roster-squad.component";
import { SoldierBoxComponent } from "../soldier-box/soldier-box.component";

export const ROSTER_COMPONENTS = [
  RosterSquadComponent,
  CreateSquadComponent,
  SoldierBoxComponent,
];

@Component({
  selector: "roster-component",
  templateUrl: "./roster-component.html",
  styleUrls: ["./roster-component.scss"],
})
export class RosterComponent {
  loading = true;
  edit = false;
  eventId: number;

  constructor(
    public accessChecker: NbAccessChecker,
    public service: RosterSocketService,
    private dialogService: NbDialogService,
    router: Router
  ) {
    this.eventId = Number.parseInt(router.url.split("/")[2]);
    this.refresh();
  }

  async refresh() {
    this.loading = true;
    await this.service.loadRoster(this.eventId);
    this.loading = false;
  }

  onDrop(event: CdkDragDrop<any>) {
    this.service.drop(event);
  }

  createSquad() {
    this.dialogService.open(CreateSquadComponent).onClose.subscribe((name) => {
      if (name) this.service.createSquad(name);
    });
  }

  deleteSquad(id: number) {
    this.service.deleteSquad(id);
  }

  renameSquad({ name, position, id }) {
    this.service.renameSquad(name, position, id);
  }
}
