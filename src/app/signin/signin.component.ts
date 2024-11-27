import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule  } from '@angular/router';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor( private studentService:StudentService ,public router:Router ){}
  public studentarray:any =[]
  public email =''
  public password =''
  public msg =''

  ngOnInit(){
    this.studentarray = JSON.parse(localStorage.getItem('studentarray')!)
    console.log(localStorage['studentarray']);
  }
  signin()
  {
    let student = this.studentarray.find((student:any,index:number)=>student.email == this.email && student.password==this.password)
    if(student)
    {
      

      console.log(student.status)
      if(student.status == 'Inactive')
      {
        this.msg="Account Inactive contact the school administrator"
      }
      else
      {
        this.router.navigate(['dashboard']).then(
          (success) => console.log('Navigation Success:', success),
          (error) => console.error('Navigation Error:', error)
        );
        this.studentService.setCurrentStudent(student)
        localStorage.setItem('currentstudent',JSON.stringify(student))
      }
     
    }
    else{
      this.msg='Incorrect email or password'
    }
  }

}
