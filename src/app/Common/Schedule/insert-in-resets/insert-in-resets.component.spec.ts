import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertInResetsComponent } from './insert-in-resets.component';

describe('InsertInResetsComponent', () => {
  let component: InsertInResetsComponent;
  let fixture: ComponentFixture<InsertInResetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertInResetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertInResetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
