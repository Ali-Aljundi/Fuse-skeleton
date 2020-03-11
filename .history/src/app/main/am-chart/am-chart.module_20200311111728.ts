import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartComponent } from './am-chart.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
      path     : '**',
      component: AmChartComponent,
      resolve  : {
          data: AmChartComponent
      }
  }
];

@NgModule({
  declarations: [
    AmChartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AmChartModule { }
