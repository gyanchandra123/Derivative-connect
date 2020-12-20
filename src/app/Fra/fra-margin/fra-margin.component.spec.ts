import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraMarginComponent } from './fra-margin.component';

describe('MarginComponent', () => {
  let component: FraMarginComponent;
  let fixture: ComponentFixture<FraMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
