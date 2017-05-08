export class AppRouter{
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
