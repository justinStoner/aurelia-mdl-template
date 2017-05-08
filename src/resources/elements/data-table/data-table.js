import {inject, bindable} from 'aurelia-framework';
import models from '../../../models'
import {DialogService} from 'aurelia-dialog';
@inject(DialogService)
export class DataTable {
  @bindable paginate;
  @bindable add;
  @bindable filter;
  @bindable data;
  @bindable labels;
  @bindable fieldNames;
  @bindable model;
  @bindable addModal;
  @bindable service;
  @bindable tableView;
  @bindable filterModal;
  constructor(dialog) {
    this.dialog=dialog;
    this.loading=false;
    this.rows=10;
    this.currentIndex=0;


  }
  attached(){

    this.config=models[this.model];
    this.lastFilters=this.config.filters;
    console.log(this.config);
    console.log(this.filterModal);
    if(!this.data){
      this.loading=true;
      this.loadItems()
      console.log(this.addModal);
    }
  }
  loadItems(index=0){
    this.currentIndex=index;
    this.loading=true;
    console.log(index, this.rows);
    this.service.loadItems(index, this.rows).then(res=>{
      console.log(res);
      this.loading=false;
    });
  }
  createItem(){
    this.dialog.open({viewModel: this.addModal, model:'event'})
    .whenClosed(res=>{
      console.log(res);
      if(!res.wasCancelled){
        this.service.createItem(res.output).then(response=>{
          if(response.success){
            this.loadItems();
          }
        })
      }else{

      }
    })
  }
  applyFilters(){
    this.dialog.open({viewModel: this.filterModal, model:{defaultFilters:this.config.filters, currentFilters:this.lastFilters}})
    .whenClosed(res=>{
      console.log(res);
      if(!res.wasCancelled){
        this.lastFilters=res.output;
        this.service.loadItems(0, this.rows, res.output).then(response=>{
          if(response.success){
            this.loadItems();
          }
        })
      }else{

      }
    })
  }
  setRows(r){
    this.rows=r;
  }
}
