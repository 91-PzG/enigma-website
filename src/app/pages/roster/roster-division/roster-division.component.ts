import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component, Input } from "@angular/core";
import { NbDialogService } from "@nebular/theme";
import { CreateSquadComponent } from "../create-squad/create-squad.component";
import { RosterSocketService } from "../roster-data.service";

@Component({
  selector: "roster-division",
  styleUrls: ["../roster-component/roster-component.scss"],
  templateUrl: "./roster-division.component.html",
})
export class RosterDivisionComponent {
  @Input() division: string;
  @Input() edit: boolean;

  constructor(
    public service: RosterSocketService,
    private dialogService: NbDialogService
  ) {}

  onDrop(event: CdkDragDrop<any>) {
    this.service.drop(event);
  }

  createSquad() {
    this.dialogService.open(CreateSquadComponent).onClose.subscribe((name) => {
      if (name) this.service.createSquad(name, this.division);
    });
  }

  deleteSquad(id: number) {
    this.service.deleteSquad(id);
  }

  renameSquad({ name, position, id }) {
    this.service.renameSquad(name, position, this.division, id);
  }
}
