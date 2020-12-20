import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFloorComponent } from './cap-floor.component';

describe('CapFloorComponent', () => {
  let component: CapFloorComponent;
  let fixture: ComponentFixture<CapFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
