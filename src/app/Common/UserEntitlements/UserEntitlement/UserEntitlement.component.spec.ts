import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntitlementComponent } from './UserEntitlement.component';

describe('SwapticketComponent', () => {
  let component: UserEntitlementComponent;
  let fixture: ComponentFixture<UserEntitlementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEntitlementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEntitlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
