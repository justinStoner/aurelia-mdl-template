import models from '../models';
import {inject} from 'aurelia-framework';
import {FakeAjax} from '../fake-ajax';
@inject(FakeAjax)
export class EventsService{
  constructor(fakeJax){
    this.fakeJax=fakeJax;
    this.loading=false;
    this.items=[];
  }

  loadEvents(index, rows){
    this.loading=true;
    return new Promise((resolve, reject)=>{
      this.fakeJax.loadItems(index, rows, 'events').then(res=>{
        this.items=res;
        console.log(this.items);
        this.loading=false;
        resolve(res);
      })
    })
  }

  getEvents(){
    return this.items.data;
  }
}
