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
* data.ts: interface with dublin bus variables

*/

export interface Data {
    errorcode: string,
    errormessage: string,
	numberofresults : number,
    stopid : string,
    timestamp: string,
	results : [
        {
            arrivaldatetime: string,
            duetime: string,
            departuredatetime: string,
            departureduetime: string,
            scheduledarrivaldatetime: string,
            scheduleddeparturedatetime: string,
            destination: string,
            destinationlocalized: string,
            origin: string,
            originlocalized: string,
            direction: string,
            operator: string,
            additionalinformation: string,
            lowfloorstatus: string,
            route: string,
            sourcetimestamp: string,
            monitored: string
        }
    ]
}


/*
export interface Data {
    errorcode: string,
    errormessage: string,
    numberofresults:string,
    results: [
        {
            stopid: string,
            displaystopid: string,
	        shortname : number,
            shortnamelocalized : string,
            fullname: string,
            fullnamelocalized: string,
	        latitude : number,
            longitude : string,
            lastupdated: string,
	        operators : [
                {
                    name: string,
                    routes: [{}
        
                ]
                }
            ]
        }
    ]
}
*/