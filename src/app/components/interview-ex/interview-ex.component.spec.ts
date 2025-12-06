import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewExComponent } from './interview-ex.component';

describe('InterviewExComponent', () => {
  let component: InterviewExComponent;
  let fixture: ComponentFixture<InterviewExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
