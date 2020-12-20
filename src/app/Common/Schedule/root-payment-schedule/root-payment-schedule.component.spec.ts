import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootPaymentScheduleComponent } from './root-payment-schedule.component';

describe('RootPaymentScheduleComponent', () => {
  let component: RootPaymentScheduleComponent;
  let fixture: ComponentFixture<RootPaymentScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootPaymentScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootPaymentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
