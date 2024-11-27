import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecomponentComponent } from './pipecomponent.component';

describe('PipecomponentComponent', () => {
  let component: PipecomponentComponent;
  let fixture: ComponentFixture<PipecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
