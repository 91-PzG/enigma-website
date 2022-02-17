import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "dashboard-component-pie",
  //template: ` <div echarts [options]="options" class="echart"></div> `,
})
export class DashboardPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService) {}

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [
          colors.warningLight,
          colors.infoLight,
          colors.dangerLight,
          colors.successLight,
          colors.primaryLight,
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["USA", "Germany", "France", "Canada", "Russia"],
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: "member",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            data: [
              { value: 31, name: "PzG" },
              { value: 6, name: "recrute" },
              { value: 31, name: "infanterie" },
              { value: 9, name: "recon" },
              { value: 10, name: "armor" },
              { value: 19, name: "reservist" },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
