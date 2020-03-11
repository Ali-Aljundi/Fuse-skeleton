import { Component, ViewEncapsulation, ViewChild  } from '@angular/core';
import { DashboardLayoutComponent  } from '@syncfusion/ej2-angular-layouts';
import { FirstChartComponent } from './am-chart/first-chart/first-chart.component';

@Component({
  selector: 'app-am-chart',
  templateUrl: './am-chart.component.html',
  styleUrls: ['./am-chart.component.scss']
})
export class AmChartComponent { 

  @ViewChild('defaultLayout') dashboardLayout: DashboardLayoutComponent;
  
  public cellSpacing: number[] = [10, 10];
  public columns = 5;
  
  public panels: any = [
  // tslint:disable-next-line:max-line-length
  {sizeX: 1, sizeY: 1, row: 0, col: 0, content : '<div id="three" class="e-panel" data-row="0" data-col="1" data-sizeX="2" data-sizeY="2"><span id="close" class="e-template-icon e-clear-icon"></span><div class="e-panel-container"><div class="text-align">2</div></div></div>' },
  {sizeX: 3, sizeY: 2, row: 0, col: 1, content: '<div class="content">1</div>'},
  {sizeX: 1, sizeY: 3, row: 0, col: 4, content: '<div class="content">2</div>'},
  {sizeX: 1, sizeY: 1, row: 1, col: 0, content: '<div class="content">3</div>'},
  {sizeX: 2, sizeY: 1, row: 2, col: 0, content: '<div class="content">4</div>'},
  {sizeX: 1, sizeY: 1, row: 2, col: 2, content: '<div class="content">5</div>'},
  {sizeX: 1, sizeY: 1, row: 2, col: 3, content: '<div class="content">6</div>'},
  ];

  // tslint:disable-next-line:typedef
  onCreated(args: any) {
      // resizePanel("id", sizeX, sizeY)
      this.dashboardLayout.resizePanel('layout_4', 1, 1);
      this.dashboardLayout.resizePanel('layout_5', 2, 1);
  }

}
