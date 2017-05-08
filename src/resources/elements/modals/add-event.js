import {DialogController} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
// import TimePicker from 'material-pickers-time';
// import MaterialDateTimePicker from 'material-datetime-picker';

@inject(DialogController)
export class AddEvent {
  constructor(controller) {
    this.controller=controller;
    this.message = 'Hello world';
    //console.log(MaterialDatepicker);
    this.event={
      name:'',
      status:'',
      date:'',
      startTime:'',
      endTime:'',
      type:'',
      company:'',
      about:'',
      city:'',
      street:'',
      registrants:0,
      waitlist:0
    }

  }
  activate(){

  }
  attached(){
    // const dateInput =  document.getElementById('date-input');
    // const startTimeInput = document.getElementById('time-start');
    // const endTimeInput = document.getElementById('time-end');
    //
    // const timepicker = new TimePicker();
    // startTimeInput.addEventListener('focus', event => timepicker.openOnInput(event.target));
    // endTimeInput.addEventListener('focus', event => timepicker.openOnInput(event.target));
    //
    // const datepicker = new MaterialDateTimePicker({
    //   styles: {
    //     scrim: 'c-scrim--date-only',
    //   }
    // })
    // .on('submit', (val) => {
    //   this.event.date=val.format("MM/DD/YYYY");
    // })
    // dateInput.addEventListener('focus', () => datepicker.open());

  }
}
