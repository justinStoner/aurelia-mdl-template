import {inject} from 'aurelia-framework';

export class EventsTable{
  constructor(){

  }
  activate(service){
    console.log(service);
    this.service=service;
  }
  attached(){

  }
}
