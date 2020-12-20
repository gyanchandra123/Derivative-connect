import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescreditComponent } from './salescredit.component';

describe('SalescreditComponent', () => {
  let component: SalescreditComponent;
  let fixture: ComponentFixture<SalescreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalescreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
