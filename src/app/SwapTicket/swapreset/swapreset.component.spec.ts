import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapresetComponent } from './swapreset.component';

describe('SwapresetComponent', () => {
  let component: SwapresetComponent;
  let fixture: ComponentFixture<SwapresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
