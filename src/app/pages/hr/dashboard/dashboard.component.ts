import { Component } from "@angular/core";
import { MembersChangeChartComponent } from "./members-change-chart.component";
import { MembersPieChartComponent } from "./members-pie-chart.component";
import { RecruitsComponent } from "./recruits.component";
import { WarningListComponent } from "./warning-list.component";

export const DASHBOARD_COMPONENTS = [
  MembersPieChartComponent,
  MembersChangeChartComponent,
  RecruitsComponent,
  WarningListComponent,
];

@Component({
  selector: "dashboard-component",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {}
