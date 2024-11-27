import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbehavsubjparentComponent } from './contactbehavsubjparent.component';

describe('ContactbehavsubjparentComponent', () => {
  let component: ContactbehavsubjparentComponent;
  let fixture: ComponentFixture<ContactbehavsubjparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactbehavsubjparentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactbehavsubjparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
