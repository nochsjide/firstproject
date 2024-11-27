import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editcomponent',
  templateUrl: './editcomponent.component.html',
  styleUrls: ['./editcomponent.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class EditcomponentComponent {
  public editFirstName: string = '';
  public editLastName: string = '';
  public editEmail: string = '';
  public editPhoneNumber: string = '';
  public index: number = -1;
  public users: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.index = +this.route.snapshot.paramMap.get('index')!;
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
    if (this.users[this.index]) {
      const user = this.users[this.index];
      this.editFirstName = user.FirstName;
      this.editLastName = user.LastName;
      this.editEmail = user.Email;
      this.editPhoneNumber = user.PhoneNumber;
    }
  }

  saveChanges() {
    if (this.index >= 0) {
      this.users[this.index] = {
        FirstName: this.editFirstName,
        LastName: this.editLastName,
        Email: this.editEmail,
        PhoneNumber: this.editPhoneNumber,
      };
      localStorage.setItem('users', JSON.stringify(this.users));
      this.router.navigate(['/contact']);
    }
  }
}
