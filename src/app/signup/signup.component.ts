import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  public fullname = '';
  public email = '';
  public password = '';
  public phonenumber = '';
  public studentarray: any = [];
  public errmessage: any = '';

  public classes = ['JSS1', 'JSS2', 'JSS3', 'SS1', 'SS2', 'SS3'];
  public departments = ['Science', 'Art', 'Commercial'];
  public selectedClass = '';
  public selectedDepartment = '';
  public showDepartment = false;

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('studentarray')) {
      this.studentarray = JSON.parse(localStorage.getItem('studentarray')!);
    }
  }

  onClassChange() {
    this.showDepartment = this.selectedClass.startsWith('SS');
    if (!this.showDepartment) {
      this.selectedDepartment = '';
    }
  }

  generateRegistrationNumber(): string {
    let regNumber:any;
    do {
      regNumber = 'ST-' + Math.floor(100000 + Math.random() * 900000).toString();
    } while (
      this.studentarray.some(
        (student: any) => student.registrationNumber === regNumber
      )
    );
    return regNumber;
  }

  signup() {
    const existingStudent = this.studentarray.find(
      (student: any) => student.email === this.email
    );

    if (existingStudent) {
      this.errmessage = 'Email already exists';
    } else {
      const newStudent = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        phonenumber: this.phonenumber,
        class: this.selectedClass,
        department: this.selectedDepartment || null,
        registrationNumber: this.generateRegistrationNumber(),
        picture: '',
        status: 'Active',
      };

      // Add new student to the array and update local storage
      this.studentarray.push(newStudent);
      localStorage.setItem('studentarray', JSON.stringify(this.studentarray));

      // Navigate to the signin page
      this.router.navigate(['/studentsignin']);
    }
  }
}
