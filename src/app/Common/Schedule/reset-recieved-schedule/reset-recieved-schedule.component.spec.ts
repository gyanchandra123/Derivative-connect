import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetRecievedScheduleComponent } from './reset-recieved-schedule.component';

describe('ResetRecievedScheduleComponent', () => {
  let component: ResetRecievedScheduleComponent;
  let fixture: ComponentFixture<ResetRecievedScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetRecievedScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetRecievedScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
