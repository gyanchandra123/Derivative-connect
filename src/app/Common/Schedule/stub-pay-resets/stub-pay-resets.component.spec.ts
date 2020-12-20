import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StubPayResetsComponent } from './stub-pay-resets.component';

describe('StubPayResetsComponent', () => {
  let component: StubPayResetsComponent;
  let fixture: ComponentFixture<StubPayResetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StubPayResetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StubPayResetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
