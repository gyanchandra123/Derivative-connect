import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraTradeBasicComponent } from './fra-trade-basic.component';

describe('TradeBasicComponent', () => {
  let component: FraTradeBasicComponent;
  let fixture: ComponentFixture<FraTradeBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraTradeBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraTradeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
