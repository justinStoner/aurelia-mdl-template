import {inject} from 'aurelia-framework';
import {AppRouter} from './app-router';
@inject(AppRouter)
export class Navigation{
  constructor(appRouter){
    this.appRouter=appRouter;
  }
}
