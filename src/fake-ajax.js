import {inject} from 'aurelia-framework';
import models from 'models';

export class FakeAjax{
  constructor(){

  }
  //pretends to be an ajax call, if there is no query it waits 500ms to resolve to simulate talking to a server
  //otherwise it filters a the list based on the passed in query amd then paginates it
  loadItems(index, rows, query, model){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        console.log(index, index+rows);
        var data=models[model]['data'];
        var obj={
          items:[],
          totalRecords:0
        }
        if(query===false){
          obj.items=data.slice(index, index+rows);
          obj.totalRecords=data.length;

        }else{
          var filtered=[];
          var q;
          for(var i = 0; i < query.length; i++){
            q=query[i];
            console.log(q);
            console.log(data);
            data=data.filter((row)=>{

              if(q.value===''){
                return true;
              }else{
                if(q.operator===''){
                  return row[q.field].toLowerCase().indexOf(q.value) >-1;
                }else if(q.operator === '==='){
                  return row[q.field] === q.value;
                }else if(q.operator === '>='){
                  return row[q.field] >= q.value;
                }else if(q.operator === '<='){
                  return row[q.field] <= q.value;
                }
              }
            });
          }
          obj.items=data.slice(index, index+rows);
          obj.totalRecords=data.length;
        }
        resolve(obj);
      }, 500);
    });
  }
  //creates an item
  createItem(item, model){
    return new Promise((resolve, reject)=>{
      models[model]['data'].unshift(item);
      resolve({success:true});
    })
  }
}
