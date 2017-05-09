import {inject} from 'aurelia-framework';
import {AppRouter} from '../../../app-router';
@inject(AppRouter)
export class SideNav {
  //the side drawer, meant to go inside navigation.html
  constructor(appRouter) {
    this.appRouter=appRouter;
    this.user={
      name:'Justin Stoner',
      email:'justin@heyjust.in'
    }
  }
}
