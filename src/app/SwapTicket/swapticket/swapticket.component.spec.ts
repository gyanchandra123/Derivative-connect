import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapticketComponent } from './swapticket.component';

describe('SwapticketComponent', () => {
  let component: SwapticketComponent;
  let fixture: ComponentFixture<SwapticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
