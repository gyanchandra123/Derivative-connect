import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmAccountComponent } from './firm-account.component';

describe('FirmAccountComponent', () => {
  let component: FirmAccountComponent;
  let fixture: ComponentFixture<FirmAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
