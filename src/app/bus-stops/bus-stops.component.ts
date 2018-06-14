/*
Assignment: BSc Mobile Web Applications, Digital Skills Acadeny

Student ID: WE60-1054
Filecreated: 2018/06/01
Reference Sources: 
You Tube tutorial: https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ
On-line tutorial: https://angular.io/tutorial

@author: Owen Taaffe
@version: v1.0

-
Changelog:
* bus-stops.component.ts: import NgForm, Httpclient, Data
added getData and onSubmit functions 
added an refresh function to ngOnInit()

*/

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Data } from '../data';

@Component({
  selector: 'app-bus-stops',
  templateUrl: './bus-stops.component.html',
  styleUrls: ['./bus-stops.component.css']
})
export class BusStopsComponent implements OnInit {
  public stopId: string;
  public data: object;
  public interval: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.stopId = "2";
    this.getData();
    
    // set interval to 3 secs to refresh getData
    this.interval = setInterval(() => {
      this.getData();
    }, 30000);
    console.log(this.data);
    this.stopId = this.stopId;
  }
  
  getData() {
    this.http.get('https://data.smartdublin.ie/cgi-bin/rtpi/realtimebusinformation?stopid=' + this.stopId + '&format=json')
    .subscribe(data => {
      this.data = data;
      console.log(this.data);
      return this.data;
    });
  }

  onSubmit(form: NgForm) {
    this.stopId = form.value.stopId;
    console.log(this.stopId);
    return this.stopId;
  }
}
