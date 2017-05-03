import {inject, bindable} from 'aurelia-framework';
import models from '../../models'
import {EventsService} from '../../services/events-service';
@inject(EventsService)
export class DataTable {
  @bindable paginate;
  @bindable add;
  @bindable filter;
  @bindable data;
  @bindable labels;
  @bindable fieldNames;
  @bindable model;
  constructor(es) {
    this.es=es;
    this.loading=false;
    this.rows=10;
    this.currentIndex=0;
    this.config=models[this.model];
  }
  attached(){
    if(!this.data){
      this.loading=true;
      this.loadItems()
    }
  }
  loadItems(index=0){
    this.currentIndex=index;
    this.loading=true;
    console.log(index, this.rows);
    if(this.model==='events'){
      this.es.loadEvents(index, this.rows).then(res=>{
        this.loading=false;
      })
    }
  }
  setRows(r){
    this.rows=r;
  }
}
