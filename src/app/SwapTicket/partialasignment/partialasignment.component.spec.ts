import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialasignmentComponent } from './partialasignment.component';

describe('PartialasignmentComponent', () => {
  let component: PartialasignmentComponent;
  let fixture: ComponentFixture<PartialasignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialasignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialasignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
