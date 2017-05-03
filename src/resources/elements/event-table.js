import {inject} from 'aurelia-framework';
import {EventsService} from '../../services/events-service';
@inject(EventsService)
export class EventTable{
  constructor(es){
    this.es=es;
  }
  activate(model){
    
  }
  attached(){

  }
}
