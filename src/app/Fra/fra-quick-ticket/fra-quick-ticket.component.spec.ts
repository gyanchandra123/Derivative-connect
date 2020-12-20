import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraQuickTicketComponent } from './fra-quick-ticket.component';

describe('FraQuickTicketComponent', () => {
  let component: FraQuickTicketComponent;
  let fixture: ComponentFixture<FraQuickTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraQuickTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraQuickTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
