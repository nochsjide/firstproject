import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubjectService {

  constructor() { }
  public behavior = new BehaviorSubject({FirstName: "jade",
    LastName: "bond",
    Email: "bondcool@gmail.com",
    PhoneNumber: "09068797424"})
}
