import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent {
  oldPassword = '';
  newPassword = '';
  confirmPassword = '';
  errorMessage = '';

  constructor(private studentService: StudentService, private router: Router) {}

  updatePassword() {
    const currentStudent = this.studentService.getCurrentStudent();

    if (currentStudent.password !== this.oldPassword) {
      this.errorMessage = 'Old password does not match';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'New passwords do not match';
      return;
    }

    this.studentService.updatePassword(currentStudent.email, this.newPassword);

    let storedStudents = JSON.parse(localStorage.getItem('studentarray') || '[]');
    const index = storedStudents.findIndex(
      (student: any) => student.email === currentStudent.email
    );
    if (index !== -1) {
      storedStudents[index].password = this.newPassword;
      localStorage.setItem('studentarray', JSON.stringify(storedStudents));
    }

    this.router.navigate(['/dashboard']);
  }
}
