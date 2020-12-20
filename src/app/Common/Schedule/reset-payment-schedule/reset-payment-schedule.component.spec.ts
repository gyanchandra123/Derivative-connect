import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPaymentScheduleComponent } from './reset-payment-schedule.component';

describe('ResetPaymentScheduleComponent', () => {
  let component: ResetPaymentScheduleComponent;
  let fixture: ComponentFixture<ResetPaymentScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPaymentScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPaymentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
