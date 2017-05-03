import {inject} from 'aurelia-framework';
import {EventsService} from './services/events-service';
@inject(EventsService)
export class Events {
  constructor(es) {
    this.es=es;
    this.events=[];
    this.loading=true;
  }
  // loadEvents(){
  //   this.loading=true;
  //   this.es.loadEvents(0, 10).then(res=>{
  //     this.events=res;
  //   })
  // }
  attached(){
    //this.loadEvents();
  }
}
