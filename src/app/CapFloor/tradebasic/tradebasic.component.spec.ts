import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradebasicComponent } from './tradebasic.component';

describe('TradebasicComponent', () => {
  let component: TradebasicComponent;
  let fixture: ComponentFixture<TradebasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradebasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradebasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
