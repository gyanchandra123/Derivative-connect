import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraSalesCreditComponent } from './fra-sales-credit.component';

describe('SalesCreditComponent', () => {
  let component: FraSalesCreditComponent;
  let fixture: ComponentFixture<FraSalesCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraSalesCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraSalesCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
