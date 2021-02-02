import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Squad } from "../../../@core/data/roster";

@Component({
  selector: "roster-squad",
  styleUrls: ["../roster-component/roster-component.scss"],
  templateUrl: "./roster-squad.component.html",
})
export class RosterSquadComponent {
  @Input() squad: Squad;
  @Output() drop = new EventEmitter<CdkDragDrop<any>>();

  onDrop(event: CdkDragDrop<any>) {
    this.drop.emit(event);
  }
}
