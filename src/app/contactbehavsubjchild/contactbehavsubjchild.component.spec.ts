import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbehavsubjchildComponent } from './contactbehavsubjchild.component';

describe('ContactbehavsubjchildComponent', () => {
  let component: ContactbehavsubjchildComponent;
  let fixture: ComponentFixture<ContactbehavsubjchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactbehavsubjchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactbehavsubjchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
