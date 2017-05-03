import {inject} from 'aurelia-framework';
import models from 'models';

export class FakeAjax{
  constructor(){

  }
  loadItems(index, rows, model){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        console.log(index, index+rows);
        var arr=models[model]['data'].slice(index, index+rows);
        resolve(arr);
      }, 500);
    });
  }
}
