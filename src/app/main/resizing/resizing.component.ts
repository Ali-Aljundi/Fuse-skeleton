import { Component,ViewEncapsulation,ViewChild, ElementRef  } from '@angular/core';
import { DashboardLayoutComponent, PanelModel } from '@syncfusion/ej2-angular-layouts';
//import a from './widget/widget.component.html';


@Component({
  selector: 'app-resizing',
  templateUrl: './resizing.component.html',
  styleUrls: ['./resizing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResizingComponent
    {
        public cellSpacing: number[] = [5, 5];
        public columns: number = 5;
        public allowResizing: boolean = true;
        public resizableHandles: string[] = ['e-south-east','e-east','e-west','e-north','e-south'];
        public panels: PanelModel[]  = [
        { "sizeX": 1, "sizeY": 1, "row": 0, "col": 0},
        { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content: '<div class="content">1</div>' },
        { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content: '<div class="content">2</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 1, "col": 0, content: '<div class="content">3</div>' },
        { "sizeX": 2, "sizeY": 1, "row": 2, "col": 0, content: '<div class="content">4</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content: '<div class="content">5</div>' },
        { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content: '<div class="content">6</div>' }
        ];

        //Dashboard Layout's resizestart event function
    }
