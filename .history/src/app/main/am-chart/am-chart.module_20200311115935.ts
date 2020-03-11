import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartComponent } from './am-chart.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
      path     : '**',
      loadChildren: 'AmChartComponent',
  }
];

@NgModule({
  declarations: [
    AmChartComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class AmChartModule { }
