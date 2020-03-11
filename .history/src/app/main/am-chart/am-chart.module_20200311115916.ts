import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmChartComponent } from './am-chart.component';
import { Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';

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
    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule
  ]
})
export class AmChartModule { }
