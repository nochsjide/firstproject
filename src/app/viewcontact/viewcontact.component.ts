import { Component } from '@angular/core';

@Component({
  selector: 'app-viewcontact',
  standalone: true,
  imports: [],
  templateUrl: './viewcontact.component.html',
  styleUrl: './viewcontact.component.css'
})
export class ViewcontactComponent {
public contactinfo:any={}
ngOnInit()
{
  this.contactinfo = JSON.parse(localStorage.getItem('viewobject')!)
  console.log(this.contactinfo)
}
}
