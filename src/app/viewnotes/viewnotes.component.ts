import { Component } from '@angular/core';

@Component({
  selector: 'app-viewnotes',
  standalone: true,
  imports: [],
  templateUrl: './viewnotes.component.html',
  styleUrl: './viewnotes.component.css'
})
export class ViewnotesComponent {
  public notesinfo:any={}
  ngOnInit()
{
  const storedNote = localStorage.getItem('viewnotesobject');
  this.notesinfo = storedNote ? JSON.parse(storedNote) : {};
}
}
