import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootRecievedScheduleComponent } from './root-recieved-schedule.component';

describe('RootRecievedScheduleComponent', () => {
  let component: RootRecievedScheduleComponent;
  let fixture: ComponentFixture<RootRecievedScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootRecievedScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootRecievedScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
