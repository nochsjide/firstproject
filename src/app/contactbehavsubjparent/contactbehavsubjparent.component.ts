import { Component } from '@angular/core';
import { ContactbehavsubjchildComponent } from '../contactbehavsubjchild/contactbehavsubjchild.component';

@Component({
  selector: 'app-contactbehavsubjparent',
  standalone: true,
  imports: [ContactbehavsubjchildComponent],
  templateUrl: './contactbehavsubjparent.component.html',
  styleUrl: './contactbehavsubjparent.component.css'
})
export class ContactbehavsubjparentComponent {

public show(i:any)
{

}
}
