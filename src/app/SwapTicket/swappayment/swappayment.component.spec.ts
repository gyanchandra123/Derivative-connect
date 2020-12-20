import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwappaymentComponent } from './swappayment.component';

describe('SwappaymentComponent', () => {
  let component: SwappaymentComponent;
  let fixture: ComponentFixture<SwappaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwappaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwappaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
