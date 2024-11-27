import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
constructor(public router:Router){}


ngOnInit(){
  this.adminarray = JSON.parse(localStorage.getItem('adminarray')!)
  console.log(localStorage['adminarray']);
}
public adminarray:any =[]
public email =''
public password =''
public msg =''


signin()
{
  let admin = this.adminarray.find((admin:any,index:number)=>admin.email == this.email && admin.password==this.password)
  if(admin)
  {
    localStorage.setItem('currentadmin',JSON.stringify(admin))
    console.log(admin)
    this.router.navigate(['admin/dashboard']).then(
      (success) => console.log('Navigation Success:', success),
      (error) => console.error('Navigation Error:', error)
    );
   
  }
  else{
    this.msg='Incorrect email or password'
  }
}
}
