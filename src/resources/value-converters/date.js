import moment from 'moment';
export class DateValueConverter {
  toView(value, format) {
    if(!value){
      return null;
    }
    if(!format){
      format='MMM Do YYYY';
    }
    return moment(value).format(format);
  }

  fromView(value) {

  }
}
