import {inject} from 'aurelia-framework';
import {AppRouter} from './app-router';
@inject(AppRouter)
export class App {
  constructor(appRouter) {
    this.appRouter=appRouter;
  }
  //configures application routing
  configureRouter(config, router){
    config.title="12Twenty";
    config.map([
      { route: 'home',  name: 'home', moduleId: 'home', href:'#/home', nav: true, title:'myCareer', settings:{icon:'home'}},
      { route: 'students',  name: 'students', moduleId: 'students', href:'#/students', nav: true, title:'Students', settings:{icon:'school'}},
      { route: 'employers',  name: 'employers', moduleId: 'employers', href:'#/employers', nav: true, title:'Employers', settings:{icon:'store_mall_directory'}},
      { route: 'contacts',  name: 'contacts', moduleId: 'contacts', href:'#/contacts', nav: true, title:'Contacts', settings:{icon:'group'}},
      { route: ['', 'events'],  name: 'events', moduleId: 'events', href:'#/events', nav: true, title:'Events', settings:{icon:'event'}}
    ]);
    this.appRouter.setRouter(router);
  }
}
