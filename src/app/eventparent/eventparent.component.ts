import { Component, EventEmitter, Input } from '@angular/core';
import { EventchildComponent } from '../eventchild/eventchild.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [EventchildComponent,FormsModule,CommonModule],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {
  public msgToChild = ''
  public message =''
  public response =''
 

  receivemsg(data:any)
  {
    this.response = data
  }
  send()
  {
    this.message = this.msgToChild
    this.msgToChild =''
  }

}
