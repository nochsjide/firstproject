import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor() {}
  public msg = 'i am going to the market';
  public lastname = 'owolabi';
  public firstname = 'Oyindamola';
  public age = 12;
  public getlastname() {
    return this.lastname;
  }
  //   public users =[{name:"enoch",email:"nochs"},{name:"bless",email:"sble"},
  //     {name:"chris",email:"eschri"},{name:"Lois",email:"soil"},{name:"abdulai",email:"iladibi"},
  //   {name:"aremu",email:"umera"},{name:"akala",email:"alaka"},{name:"fadeke",email:"ekedaf"}
  //   ]
  public user = localStorage.getItem('users')!;
  public users = this.user ? JSON.parse(this.user) : [];
}
