import { Component } from '@angular/core';
import { BehavioursubjectService } from '../services/behavioursubject.service';

@Component({
  selector: 'app-childbehavioursub',
  standalone: true,
  imports: [],
  templateUrl: './childbehavioursub.component.html',
  styleUrl: './childbehavioursub.component.css'
})
export class ChildbehavioursubComponent {
constructor(public behaviorsub:BehavioursubjectService){}
public data =''
ngOnInit()
{
  console.log(this.behaviorsub.behavior);
  this.behaviorsub.behavior.subscribe(data=>{
    console.log(data);
   
  })
}
}
