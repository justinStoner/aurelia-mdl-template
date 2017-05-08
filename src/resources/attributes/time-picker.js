import {inject} from 'aurelia-framework';
import TimePicker from 'material-pickers-time';
@inject(Element)
export class TimePickerCustomAttribute {
  constructor(element) {
    this.element = element;
  }
  attached(){
    const timepicker = new TimePicker();
    this.element.addEventListener('focus', event => timepicker.openOnInput(event.target));
  }
  valueChanged(newValue, oldValue) {

  }
}
