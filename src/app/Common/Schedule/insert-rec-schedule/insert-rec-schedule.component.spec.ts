import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRecScheduleComponent } from './insert-rec-schedule.component';

describe('InsertRecScheduleComponent', () => {
  let component: InsertRecScheduleComponent;
  let fixture: ComponentFixture<InsertRecScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertRecScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRecScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
