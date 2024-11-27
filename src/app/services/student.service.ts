import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: any[] = [];
  private currentStudent: any = null;

  addStudent(student: any) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }

  setCurrentStudent(student: any) {
    this.currentStudent = student;
  }

  getCurrentStudent() {
    return this.currentStudent;
  }

  updatePassword(email: string, newPassword: string) {
    const student = this.students.find((s) => s.email === email);
    if (student) {
      student.password = newPassword;
    }
  }

  updateProfilePicture(email: string, picture: string) {
    const student = this.students.find((s) => s.email === email);
    if (student) {
      student.picture = picture;
    }
  }
}
