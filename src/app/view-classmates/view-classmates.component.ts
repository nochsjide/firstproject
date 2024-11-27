import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-classmates',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './view-classmates.component.html',
  styleUrl: './view-classmates.component.css'
})
export class ViewClassmatesComponent implements OnInit{
  classmates: any[] = [];
  currentStudent: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentStudent = JSON.parse(localStorage.getItem('currentStudent')!);

    if (!this.currentStudent) {
      this.router.navigate(['/studentsignin']);
    } else {
      const students = JSON.parse(localStorage.getItem('studentarray')!);
      this.classmates = students.filter(
        (student: any) => student.class === this.currentStudent.class
      );
    }
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
