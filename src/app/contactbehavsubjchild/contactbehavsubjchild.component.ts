import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';
import { BehavioursubjectService } from '../services/behavioursubject.service';

@Component({
  selector: 'app-contactbehavsubjchild',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactbehavsubjchild.component.html',
  styleUrl: './contactbehavsubjchild.component.css',
})
export class ContactbehavsubjchildComponent {
  constructor(
    public userdetails: UserserviceService,
    public conbeh: BehavioursubjectService
  ) {}
  public users: any = [];
  public data: any = '';

  ngOnInit() {
    this.users = this.userdetails.users;
    this.conbeh.behavior.subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
  show(user:any) {
    this.conbeh.behavior.next(user);
  }
}
