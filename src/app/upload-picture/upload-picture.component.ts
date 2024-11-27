import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-upload-picture',
  standalone: true,
  imports: [],
  templateUrl: './upload-picture.component.html',
  styleUrl: './upload-picture.component.css'
})
export class UploadPictureComponent {
  selectedFile: File | null = null;

  constructor(private studentService: StudentService, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPicture() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const picture = reader.result as string;
        const currentStudent = this.studentService.getCurrentStudent();

        this.studentService.updateProfilePicture(currentStudent.email, picture);

        let storedStudents = JSON.parse(localStorage.getItem('studentarray') || '[]');
        const index = storedStudents.findIndex(
          (student: any) => student.email === currentStudent.email
        );
        if (index !== -1) {
          storedStudents[index].picture = picture;
          localStorage.setItem('studentarray', JSON.stringify(storedStudents));
        }

        this.router.navigate(['/dashboard']);
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
