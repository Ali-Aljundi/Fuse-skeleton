import { Component, NgZone  } from '@angular/core';
import { DashboardLayoutComponent  } from '@syncfusion/ej2-angular-layouts';



@Component({
  selector: 'app-am-chart',
  templateUrl: './am-chart.component.html',
  styleUrls: ['./am-chart.component.scss']
})
export class AmChartComponent { 

  
  constructor(private zone: NgZone){
    
  }

  public cellSpacing: number[] = [10, 10];
  public columns = 5;
  
  public panels: any = [
  {sizeX: 1, sizeY: 1, row: 0, col: 0 },
  {sizeX: 3, sizeY: 2, row: 0, col: 1},
  {sizeX: 1, sizeY: 3, row: 0, col: 4},
  {sizeX: 1, sizeY: 1, row: 1, col: 0},
  {sizeX: 2, sizeY: 1, row: 2, col: 0},
  {sizeX: 1, sizeY: 1, row: 2, col: 2},
  {sizeX: 1, sizeY: 1, row: 2, col: 3},
  ];

}
