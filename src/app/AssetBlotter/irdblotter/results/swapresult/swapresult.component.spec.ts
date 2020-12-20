import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapresultComponent } from './swapresult.component';

describe('SwapresultComponent', () => {
  let component: SwapresultComponent;
  let fixture: ComponentFixture<SwapresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
