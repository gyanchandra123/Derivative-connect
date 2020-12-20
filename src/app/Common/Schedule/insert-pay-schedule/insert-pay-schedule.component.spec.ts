import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPayScheduleComponent } from './insert-pay-schedule.component';

describe('InsertPayScheduleComponent', () => {
  let component: InsertPayScheduleComponent;
  let fixture: ComponentFixture<InsertPayScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertPayScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertPayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
