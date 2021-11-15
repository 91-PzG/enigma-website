import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Squad } from "../../../../util/squad";

@Component({
  selector: "roster-squad",
  styleUrls: [
    "../roster-component/roster-component.scss",
    "./roster-squad.component.scss",
  ],
  templateUrl: "./roster-squad.component.html",
})
export class RosterSquadComponent {
  hover = false;

  @Input() squad: Squad;
  @Input() edit: boolean;

  @Output() drop = new EventEmitter<CdkDragDrop<any>>();
  @Output() delete = new EventEmitter<number>();
  @Output() rename = new EventEmitter<{
    name: string;
    position: number;
    id: number;
  }>();

  onDrop(event: CdkDragDrop<any>) {
    this.drop.emit(event);
  }

  deleteSquad() {
    this.delete.emit(this.squad.id);
  }

  renameSquad() {
    const name = (
      document.getElementById("squad-name-" + this.squad.id) as HTMLInputElement
    ).value;
    this.rename.emit({
      name,
      position: this.squad.position,
      id: this.squad.id,
    });
  }
}
