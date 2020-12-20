import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapOptionComponent } from './swap-option.component';

describe('SwapOptionComponent', () => {
  let component: SwapOptionComponent;
  let fixture: ComponentFixture<SwapOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
