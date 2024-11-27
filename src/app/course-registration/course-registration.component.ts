import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-registration',
  standalone: true,
  imports: [],
  templateUrl: './course-registration.component.html',
  styleUrl: './course-registration.component.css'
})
export class CourseRegistrationComponent implements OnInit {
  currentStudent: any = null;
  availableCourses: string[] = [];
  registeredCourses: string[] = [];
  message: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentStudent = JSON.parse(localStorage.getItem('currentStudent')!);

    if (!this.currentStudent) {
      this.router.navigate(['/studentsignin']);
    } else {
      this.registeredCourses = this.currentStudent.registeredCourses || [];
      this.availableCourses = this.getAvailableCourses(this.currentStudent.class);
    }
  }

  getAvailableCourses(studentClass: string): string[] {
    if (studentClass.startsWith('JSS')) {
      return [
        'Mathematics',
        'English Language',
        'A Nigerian Language (Yoruba)',
        'Basic Science',
        'Social Studies',
        'Fine Arts/Creative Art',
        'Agricultural Science',
        'Civic Education',
        'Christian Religion Studies',
        'Physical and Health Education',
        'Business Studies',
        'French',
        'Computer Studies',
        'Home Economics',
        'Music',
        'Basic Technology',
      ];
    } else if (studentClass.startsWith('SS')) {
      return [
        'Biology',
        'Physics',
        'Chemistry',
        'Further Mathematics',
        'Health and Physical Education',
        'Computer Science',
        'Technical Drawing (Applied Science)',
        'Food and Nutrition',
        'Agricultural Science',
        'Financial Account (Compulsory for Commercial Subject Students)',
        'Book Keeping (Trade Subject)',
        'Typewriting (Trade Subject)',
        'Office Practice (Trade Subject)',
        'Commerce (Compulsory for Commercial Subject Students)',
        'Data Processing (A Trade Subject)',
        'Economics',
        'Government',
        'Literature – in- English',
        'Christian Religion Knowledge',
        'Fine Art/Creative Art',
        'French',
        'Geography',
      ];
    }
    return [];
  }

  addCourse(course: string) {
    this.registeredCourses.push(course);
    this.currentStudent.registeredCourses = this.registeredCourses;
    localStorage.setItem('currentStudent', JSON.stringify(this.currentStudent));

    const students = JSON.parse(localStorage.getItem('studentarray')!);
    const index = students.findIndex((s: any) => s.email === this.currentStudent.email);
    students[index] = this.currentStudent;
    localStorage.setItem('studentarray', JSON.stringify(students));

    this.message = `${course} added successfully!`;
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
