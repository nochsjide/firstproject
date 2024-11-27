import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule], // Add CommonModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public firstname: string = '';
  public lastname: string = '';
  public email: string = '';
  public phonenumber: string = '';
  public users: any[] = [];
  public showuserinfo: string = '';

  constructor(public route: Router,public userserve:UserserviceService) {
    // Load existing users from localStorage if available
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  create() {
    let contactobj = {
      FirstName: this.firstname,
      LastName: this.lastname,
      Email: this.email,
      PhoneNumber: this.phonenumber,
    };

    this.users.push(contactobj);
    this.updateLocalStorage();

    // Clear input fields
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phonenumber = '';
  }

  deleteLastContact() {
    this.users.pop();
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editcontact(index: number) {
    this.route.navigate(['/contact/edit', index]);
  }

  viewcontact(i: number) {
    localStorage.setItem('viewobject', JSON.stringify(this.users[i]));
    this.route.navigate(['/contact/view']);
  }
}

// displayUsers() {
//   const detailsElement = document.getElementById('details');
//   if (detailsElement) {
//     detailsElement.innerHTML = '';
//     this.users.forEach((user, index) => {
//       const userInfo = document.createElement('p');
//       userInfo.innerHTML = `
//         ${index + 1}. ${user.FirstName} ${user.LastName}, Email: ${
//         user.Email
//       }, Phone: ${user.PhoneNumber}
//         <button class="btn btn-info mx-2" (click)="editContact(${index})">Edit</button>
//         <a href="/contact/view"><button class="btn btn-secondary">View</button></a>`;
//       detailsElement.appendChild(userInfo);
//     });
//   }
// }
