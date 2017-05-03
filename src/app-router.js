export class AppRouter{
  constructor(){
    this.router;
  }
  setRouter(r){
    this.router=r;
    console.log(this.router);
  }

  get navigation(){
    return this.router.navigation;
  }

}
