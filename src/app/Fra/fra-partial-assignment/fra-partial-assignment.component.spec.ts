import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraPartialAssignmentComponent } from './fra-partial-assignment.component';

describe('PartialAssignmentComponent', () => {
  let component: FraPartialAssignmentComponent;
  let fixture: ComponentFixture<FraPartialAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraPartialAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraPartialAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
