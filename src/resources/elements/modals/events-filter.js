import {DialogController} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import TimePicker from 'material-pickers-time';
import MaterialDateTimePicker from 'material-datetime-picker';
import models from 'models'
@inject(DialogController)
export class EventsFilter {
  constructor(controller) {
    this.controller=controller;


  }
  activate(model){
    this.model=model;

  }
  attached(){

  }
  clear(){
    this.model.lastFilters=this.model.defaultFilters;
  }
}
