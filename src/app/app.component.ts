/*
Assignment: BSc Mobile Web Applications, Digital Skills Acadeny

Student ID: WE60-1054
Filecreated: 2018/05/28
Reference Sources:
You Tube tutorial: https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ
On-line tutorial: https://angular.io/tutorial 

@author: Owen Taaffe
@version: v1.0

-
Changelog:
* app.component.ts: added app-bus-stops element

*/

import { Component, OnInit, enableProdMode } from '@angular/core';

enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dublin Bus Stops';

  constructor() { }

  
  getRouteData() {} 

  ngOnInit() {
  }

}
