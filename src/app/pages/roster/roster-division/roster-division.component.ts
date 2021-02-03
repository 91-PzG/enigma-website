import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component, Input } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { CreateSquadComponent } from "../create-squad/create-squad.component";
import { RosterDataService } from "../roster-data.service";

@Component({
  selector: "roster-division",
  styleUrls: ["../roster-component/roster-component.scss"],
  templateUrl: "./roster-division.component.html",
})
export class RosterDivisionComponent {
  @Input() division: string;

  constructor(
    public service: RosterDataService,
    private dialogService: NbDialogService
  ) {}

  onDrop(event: CdkDragDrop<any>) {
    this.service.drop(event, this.division);
  }

  createSquad() {
    this.dialogService.open(CreateSquadComponent).onClose.subscribe((name) => {
      if (name) this.service.createSquad(name, this.division);
    });
  }

  deleteSquad(position: number) {
    this.service.deleteSquad(position, this.division);
  }

  renameSquad({ name, position }) {
    this.service.renameSquad(name, position, this.division);
  }
}
