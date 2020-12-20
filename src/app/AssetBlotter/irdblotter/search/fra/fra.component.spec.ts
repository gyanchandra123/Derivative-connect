import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraComponent } from './fra.component';

describe('FraComponent', () => {
  let component: FraComponent;
  let fixture: ComponentFixture<FraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
