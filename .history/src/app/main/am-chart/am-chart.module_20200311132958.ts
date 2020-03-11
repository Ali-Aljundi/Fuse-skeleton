import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartComponent } from './am-chart.component';
import { Routes, RouterModule } from '@angular/router';

// import the DashboardLayoutModule for the Dashboard Layout component
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { FirstChartComponent } from './am-chart/first-chart/first-chart.component';


const routes: Routes = [
  {
      path     : '**',
      component: AmChartComponent,
  }
];

@NgModule({
  declarations: [
    AmChartComponent,
    FirstChartComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DashboardLayoutModule
  ],
 exports: [
  FirstChartComponent
 ]
} )

export class AmChartModule { 
}
