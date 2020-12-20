import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraFeesComponent } from './fra-fees.component';

describe('FeesComponent', () => {
  let component: FraFeesComponent;
  let fixture: ComponentFixture<FraFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
