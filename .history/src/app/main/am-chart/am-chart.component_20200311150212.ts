import { Component, NgZone  } from '@angular/core';
import { DashboardLayoutComponent  } from '@syncfusion/ej2-angular-layouts';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-am-chart',
  templateUrl: './am-chart.component.html',
  styleUrls: ['./am-chart.component.scss']
})
export class AmChartComponent { 

  
  private chart: am4charts.XYChart;
  constructor(private zone: NgZone){
    
  }
 
  
  public cellSpacing: number[] = [10, 10];
  public columns = 5;
  
  public panels: any = [
  {sizeX: 1, sizeY: 1, row: 0, col: 0, content : '' },
  {sizeX: 3, sizeY: 2, row: 0, col: 1, content: ''},
  {sizeX: 1, sizeY: 3, row: 0, col: 4, content: '<div class="content">2</div>'},
  {sizeX: 1, sizeY: 1, row: 1, col: 0, content: '<div class="content">3</div>'},
  {sizeX: 2, sizeY: 1, row: 2, col: 0, content: '<div class="content">4</div>'},
  {sizeX: 1, sizeY: 1, row: 2, col: 2, content: '<div class="content">5</div>'},
  {sizeX: 1, sizeY: 1, row: 2, col: 3, content: '<div class="content">6</div>'},
  ];
  dashboardLayout: DashboardLayoutComponent;

  // tslint:disable-next-line:typedef
  onCreated(args: any) {
      // resizePanel("id", sizeX, sizeY)
      this.dashboardLayout.resizePanel('layout_4', 1, 1);
      this.dashboardLayout.resizePanel('layout_5', 2, 1);
  }


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.XYChart);

      chart.paddingRight = 20;

      const data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits });
      }

      chart.data = data;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = 'date';
      series.dataFields.valueY = 'value';

      series.tooltipText = '{valueY.value}';
      chart.cursor = new am4charts.XYCursor();

      const scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
  }


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
