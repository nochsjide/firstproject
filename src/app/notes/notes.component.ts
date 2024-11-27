import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  public notes: any[] = [];
  formtwo: FormGroup;

  constructor(public builder: FormBuilder, public route: Router) {
    this.formtwo = this.builder.group({
      title: '',
      content: ''
    });
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]');
  }

  create() {
    this.notes.push(this.formtwo.value);
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.formtwo.reset();
  }

  viewnotes(i: number) {
    localStorage.setItem('viewnotesobject', JSON.stringify(this.notes[i]));
    this.route.navigate(['/notes/' + i]);
  }

  delete(i: number) {
    this.notes.splice(i, 1);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  edit(i: number) {
    localStorage.setItem('editnoteindex', i.toString());
    this.route.navigate(['/notes/edit']);
  }
}
