import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingcapfloorComponent } from './savingcapfloor.component';

describe('SavingcapfloorComponent', () => {
  let component: SavingcapfloorComponent;
  let fixture: ComponentFixture<SavingcapfloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingcapfloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingcapfloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
