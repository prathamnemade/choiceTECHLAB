import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalDataService {
    idleStage:boolean=false;
    sessionTimedout:boolean=false;
    sessionTimeCount:number;
    idleStageImage:boolean=false;
    registeredUser=[]
    addArray:string[]=[]

}
