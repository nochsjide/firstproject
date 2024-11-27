import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditcomponentComponent } from './editcomponent/editcomponent.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

interface Obj{
  fullname:string,
  phonenumber:number,
  state:string,
  email:string|number,
  
}
interface Obj2
{
  matricno:string,
  age:number,
  userdetails:{name:string,gender:string,address:string}[]
  
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactComponent,EditcomponentComponent,LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'firstproject';
  firstname = "enoch";
  public userDetailsInfo: string = '';
  
  public objtwo:Obj2={
    matricno:"",
    age:6,
    userdetails:[{name:"enoch",gender:"m",address:"lagos"},{name:"bless",gender:"f",address:"can"}]
  }
  constructor() {
    this.generateUserDetailsInfo();
  }
  public generateUserDetailsInfo() {
    let info = '';
    for (let i = 0; i < this.objtwo.userdetails.length; i++) {
      const user = this.objtwo.userdetails[i];
      info += `Name: ${user.name}, Gender: ${user.gender}, Address: ${user.address}\n`;
    }
    this.userDetailsInfo = info;
  }

    
  
  public objone:{
    name:string,
    age:number,
    address:string,
    Color:string
  }={
    name:"daniel",
    age:78,
    address:'lagos',
    Color:'red'
  }
  public arrayone:(number|string|boolean|Obj)[]=[1,2,3,4,"enoc",{fullname:"enoch",phonenumber:67,state:"lagos",email:"nochs1234@gmail.com"}]
  
  public lastname:string|number=60
    public  address:string|number=""
  signup()
  {
    this.lastname = "olajide"
  }

}
