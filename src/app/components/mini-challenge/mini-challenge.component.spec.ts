import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniChallengeComponent } from './mini-challenge.component';

describe('MiniChallengeComponent', () => {
  let component: MiniChallengeComponent;
  let fixture: ComponentFixture<MiniChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniChallengeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
