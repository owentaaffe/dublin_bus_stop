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
* app.module.ts: imported FormsModule, 
                 HttpClientModule, 
                 AppRoutingModule, 
                 routingComponents,
                 BusStopsComponent,
                 BrowserAnimationsModule
                 and added to their correct place ( declarations - imports)

*/

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, enableProdMode } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { BusStopsComponent } from './bus-stops/bus-stops.component';
import { IndexModalComponent } from './index-modal/index-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BusStopsComponent,
    IndexModalComponent
  ],
  imports: [
    AppRoutingModule, 
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
