import {inject} from 'aurelia-framework';
import {EventsService} from './services/events-service';

import {AddEvent} from './resources/elements/modals/add-event';
import {EventTable} from './resources/elements/tables/events-table';
import {EventsFilter} from './resources/elements/modals/events-filter';
//imports events service, add event modal, events display table and event filters modal
//passes service to constructor through dependency injection
@inject(EventsService)
export class Events {
  constructor(es) {
    this.es=es;
    this.events=[];
    this.loading=true;
  }

  attached(){

  }
  get addEventVM(){
    return AddEvent;
  }
  get tableVM(){
    return EventTable;
  }
  get filterVM(){
    return EventsFilter;
  }
}
