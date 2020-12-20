import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInPayResetsComponent } from './insert-in-pay-resets.component';

describe('InsertInPayResetsComponent', () => {
  let component: InsertInPayResetsComponent;
  let fixture: ComponentFixture<InsertInPayResetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertInPayResetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertInPayResetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
