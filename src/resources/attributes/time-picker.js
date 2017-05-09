import {inject} from 'aurelia-framework';
import {TimepickerService} from './timepicker-service';
@inject(Element, TimepickerService)
export class TimePickerCustomAttribute {
  constructor(element, timepicker) {
    this.element = element;
    this.timepicker=timepicker;
    console.log(this.timepicker);
  }
  attached(){

    this.element.addEventListener('focus', event => this.timepicker.timepicker.openOnInput(event.target));
  }
  valueChanged(newValue, oldValue) {

  }
}
