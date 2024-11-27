import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentbehaviorsubComponent } from './parentbehaviorsub.component';

describe('ParentbehaviorsubComponent', () => {
  let component: ParentbehaviorsubComponent;
  let fixture: ComponentFixture<ParentbehaviorsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentbehaviorsubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentbehaviorsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
