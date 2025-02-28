import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprofileComponent } from './studentprofile.component';

describe('StudentprofileComponent', () => {
  let component: StudentprofileComponent;
  let fixture: ComponentFixture<StudentprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
