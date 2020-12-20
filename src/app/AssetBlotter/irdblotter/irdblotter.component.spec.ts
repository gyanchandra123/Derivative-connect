import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IRDBlotterComponent } from './irdblotter.component';

describe('IRDBlotterComponent', () => {
  let component: IRDBlotterComponent;
  let fixture: ComponentFixture<IRDBlotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IRDBlotterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IRDBlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
