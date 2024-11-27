import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
formone:FormGroup;
constructor(public  builder:FormBuilder){
  this.formone = this.builder.group({
    fname:['',Validators.minLength(4)],
    pnumber:['',[Validators.maxLength(11),Validators.required]],
    email:['',Validators.required],
    pword:['',Validators.required],
    cbox:[false]

  })
}
reactive(){
  console.log(this.formone.value);
  console.log(this.formone.value['email'])
}
}
