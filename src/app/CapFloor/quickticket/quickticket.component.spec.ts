import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickticketComponent } from './quickticket.component';

describe('QuickticketComponent', () => {
  let component: QuickticketComponent;
  let fixture: ComponentFixture<QuickticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
