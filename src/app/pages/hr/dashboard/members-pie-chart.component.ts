import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import {
  CurrentManpower,
  CurrentManpowerData,
} from "../../../@core/data/current-manpower";

@Component({
  selector: "hr-pie",
  template: `<div echarts [options]="options" class="echart"></div>`,
})
export class MembersPieChartComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;

  constructor(
    private theme: NbThemeService,
    private service: CurrentManpowerData
  ) {}

  private formatData(data: CurrentManpower): { name: string; value: number }[] {
    const pieData = [];
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "total") pieData.push({ name: key, value: value });
    });
    return pieData;
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      this.service.getData().subscribe((data) => {
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
            textStyle: {
              color: echarts.textColor,
            },
          },
          series: [
            {
              name: "Members",
              type: "pie",
              radius: "80%",
              center: ["50%", "50%"],
              data: this.formatData(data),
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
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
