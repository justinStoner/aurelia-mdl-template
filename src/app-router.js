export class AppRouter{
  //all routing information is stored here for ease of importing to other components
  constructor(){
    this.router;
  }

  setRouter(r){
    this.router=r;
  }

  get navigation(){
    return this.router.navigation;
  }

}
