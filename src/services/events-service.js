import models from '../models';
import {inject} from 'aurelia-framework';
import {FakeAjax} from '../fake-ajax';
@inject(FakeAjax)
export class EventsService{
  constructor(fakeJax){
    this.fakeJax=fakeJax;
    this.loading=false;
    this.data={};
    
  }

  loadItems(index, rows, query=false){
    this.loading=true;
    return new Promise((resolve, reject)=>{
      this.fakeJax.loadItems(index, rows, query, 'events').then(res=>{
        this.data=res;
        console.log(this.data);
        this.loading=false;
        resolve(this.data);
      })
    })
  }

  createItem(event){
    return new Promise((resolve, reject)=>{
      this.fakeJax.createItem(event, 'events').then(res=>{
        resolve(res);
      })
    })
  }
}
