import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportScheduleComponent } from './export-schedule.component';

describe('ExportScheduleComponent', () => {
  let component: ExportScheduleComponent;
  let fixture: ComponentFixture<ExportScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
