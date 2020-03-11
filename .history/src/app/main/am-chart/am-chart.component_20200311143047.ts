import { Component  } from '@angular/core';
import { DashboardLayoutComponent  } from '@syncfusion/ej2-angular-layouts';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-am-chart',
  templateUrl: './am-chart.component.html',
  styleUrls: ['./am-chart.component.scss']
})
export class AmChartComponent { 

 
  
  public cellSpacing: number[] = [10, 10];
  public columns = 5;
  
  public panels: any = [
  {sizeX: 1, sizeY: 1, row: 0, col: 0, content : '<div>' + <app-first-chart></app-first-chart> + '</div>' },
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

}
