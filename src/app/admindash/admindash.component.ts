import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css',
})
export class AdmindashComponent {
  currentAdmin: any;
  public studentarray: any = [];

  ngOnInit() {
    this.currentAdmin = JSON.parse(localStorage.getItem('currentadmin')!);
    this.studentarray = JSON.parse(localStorage.getItem('studentarray')!);
  }
  delete(i: any) {
    console.log(this.studentarray[i].status);
    this.studentarray[i].status = 'Inactive';
    localStorage.setItem('studentarray', JSON.stringify(this.studentarray));
  }
}
