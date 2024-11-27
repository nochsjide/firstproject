import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminsignup.component.html',
  styleUrl: './adminsignup.component.css'
})
export class AdminsignupComponent {
  constructor(private router:Router){}
  public fullname =''
  public email =''
  public password =''
  public phonenumber =''
  public adminarray:any =[]
  public errmessage:any =''
  ngOnInit(){
    if(localStorage['adminarray'])
    {
      this.adminarray =JSON.parse(localStorage.getItem('adminarray')!)
    }
    }
    signup()
    {
      const existingAdmin = this.adminarray.find((admin:any,index:number) => admin.email === this.email);
  
    if (existingAdmin ) {
      this.errmessage = 'Email already exists';
    } else {
      const newAdmin  = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phonenumber: this.phonenumber,
        adminid: Math.random(),
        picture: '',
      };
  
      
  
      let storedAdmins = JSON.parse(localStorage.getItem('adminarray') || '[]');
      storedAdmins.push(newAdmin);
      localStorage.setItem('adminarray', JSON.stringify(storedAdmins));
  
      this.router.navigate(['admin/login']);
    }
    }
}
