import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit {
  currentStudent: any;

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit() {
    this.currentStudent = this.studentService.getCurrentStudent();
    // if (!this.currentStudent) {
    //   this.router.navigate(['/studentsignin']);
    // }
  }

  logout() {
    this.studentService.setCurrentStudent(null);
    this.router.navigate(['/']);
  }

}
