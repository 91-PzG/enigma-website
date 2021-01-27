import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "hr-line-chart",
  template: `<div echarts [options]="options" class="echart"></div>`,
})
export class MembersChangeChartComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.danger, colors.primary, colors.info],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}",
        },
        legend: {
          left: "left",
          data: [
            "Panzer",
            "Aufklärer",
            "Artillerie",
            "Infanterie",
            "Rekruten",
            "Gesamt",
          ],
          textStyle: {
            color: echarts.textColor,
          },
        },
        xAxis: [
          {
            type: "category",
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: "log",
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        series: [
          {
            name: "Panzer",
            type: "line",
            data: [10, 10, 9, 8, 11, 10, 10, 10, 10],
          },
          {
            name: "Aufklärer",
            type: "line",
            data: [20, 20, 19, 18, 21, 20, 20, 20, 20],
          },
          {
            name: "Artillerie",
            type: "line",
            data: [3, 4, 3, 4, 3, 4, 3, 4, 3],
          },
          {
            name: "Infanterie",
            type: "line",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
          },
          {
            name: "Rekruten",
            type: "line",
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
          },
          {
            name: "Gesamt",
            type: "line",
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
