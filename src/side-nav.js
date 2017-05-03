import {inject} from 'aurelia-framework';
import {AppRouter} from './app-router';
@inject(AppRouter)
export class SideNav {
  constructor(appRouter) {
    this.appRouter=appRouter;
    this.user={
      name:'Justin Stoner',
      email:'justin@heyjust.in'
    }
  }
}
