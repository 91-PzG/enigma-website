import { Component, Input, OnInit } from "@angular/core";

@Component({
  template: "<nb-icon icon={{icon}}></nb-icon>",
})
export class EventListIconComponent implements OnInit {
  icon = "";

  @Input() value: string;

  ngOnInit() {
    this.icon = this.value;
  }
}
