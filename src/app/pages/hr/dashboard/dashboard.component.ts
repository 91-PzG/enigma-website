import { Component, OnInit } from "@angular/core";
import { PieChart, PieSeriesOption } from "echarts/charts";
import {
  LegendComponent,
  LegendComponentOption,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
} from "echarts/components";
import * as echarts from "echarts/core";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
@Component({
  selector: "dashboard-component",
  styleUrls: ["./dashboard.component.scss"],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    echarts.use([
      TitleComponent,
      TooltipComponent,
      LegendComponent,
      PieChart,
      CanvasRenderer,
      LabelLayout,
    ]);

    type EChartsOption = echarts.ComposeOption<
      | TitleComponentOption
      | TooltipComponentOption
      | LegendComponentOption
      | PieSeriesOption
    >;

    var chartDom = document.getElementById("main")!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      title: {
        text: "Mitgliederübersicht",
        subtext: "!!Nur Beispieldaten!!",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 32, name: "Infanterie" },
            { value: 10, name: "Aufklärer" },
            { value: 11, name: "Panzer" },
            { value: 4, name: "Artillerie" },
            { value: 37, name: "PzG Pool" },
            { value: 13, name: "Rekruten" },
            { value: 12, name: "Reserve" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            alignTo: "edge",
            formatter: "{name|{b}}\n{value|{c}}",
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              value: {
                fontSize: 10,
                color: "#999",
              },
            },
          },
          labelLine: {
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80,
          },
          labelLayout: function (params) {
            const isLeft = params.labelRect.x < myChart.getWidth() / 2;
            const points = params.labelLinePoints;
            // Update the end point.
            points[2][0] = isLeft
              ? params.labelRect.x
              : params.labelRect.x + params.labelRect.width;
            return {
              labelLinePoints: points,
            };
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }
}
