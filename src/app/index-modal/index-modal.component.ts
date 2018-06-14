/*
Assignment: BSc Mobile Web Applications, Digital Skills Acadeny

Student ID: WE60-1054
Filecreated: 2018/06/01
Reference Sources: 
You Tube tutorial: https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ
On-line tutorial: https://angular.io/tutorial
On-line tutorial: https://coryrylan.com/blog/build-a-angular-modal-dialog-with-angular-animate

@author: Owen Taaffe
@version: v1.0

-
Changelog:
* index-modal.component.css: added ccs for input, button, table

*/

import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-index-modal',
  templateUrl: './index-modal.component.html',
  styleUrls: ['./index-modal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class IndexModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.close();
  }

  close() {
    this.visible = true;
    this.visibleChange.emit(this.visible);
  }
}
