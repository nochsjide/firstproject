import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'


@Component({
  selector: 'app-editnotes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editnotes.component.html',
  styleUrl: './editnotes.component.css'
})
export class EditnotesComponent {
  editForm: FormGroup;
  noteIndex: number | null = null;

  constructor(private builder: FormBuilder, private router: Router) {
    this.editForm = this.builder.group({
      title: '',
      content: ''
    });
  }

  ngOnInit() {
    this.noteIndex = Number(localStorage.getItem('editnoteindex'));
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    if (this.noteIndex !== null && notes[this.noteIndex]) {
      this.editForm.patchValue({
        title: notes[this.noteIndex].title,
        content: notes[this.noteIndex].content
      });
    }
  }

  save() {
    if (this.noteIndex !== null) {
      const notes = JSON.parse(localStorage.getItem('notes') || '[]');
      notes[this.noteIndex] = this.editForm.value;
      localStorage.setItem('notes', JSON.stringify(notes));
      localStorage.removeItem('editnoteindex');  // Clear the temporary storage
      this.router.navigate(['/notes']);
    }
  }
}
