import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapfloorComponent } from './capfloor.component';

describe('CapfloorComponent', () => {
  let component: CapfloorComponent;
  let fixture: ComponentFixture<CapfloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapfloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapfloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
