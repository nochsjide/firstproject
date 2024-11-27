import { Component } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  public users:any =[]
constructor(public userserve:UserserviceService){}
ngOnInit(){
  console.log(this.userserve.msg)
  this.users = this.userserve.users

}
}
