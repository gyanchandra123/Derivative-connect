import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialAssignmentComponent } from './partial-assignment.component';

describe('PartialAssignmentComponent', () => {
  let component: PartialAssignmentComponent;
  let fixture: ComponentFixture<PartialAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
