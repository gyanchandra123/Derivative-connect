import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraAssignmentComponent } from './fra-assignment.component';

describe('AssignmentComponent', () => {
  let component: FraAssignmentComponent;
  let fixture: ComponentFixture<FraAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
