import { Component } from '@angular/core';
import { ChildbehavioursubComponent } from '../childbehavioursub/childbehavioursub.component';

@Component({
  selector: 'app-parentbehaviorsub',
  standalone: true,
  imports: [ChildbehavioursubComponent],
  templateUrl: './parentbehaviorsub.component.html',
  styleUrl: './parentbehaviorsub.component.css'
})
export class ParentbehaviorsubComponent {
public msg =''
upd()
{
  
}

}
