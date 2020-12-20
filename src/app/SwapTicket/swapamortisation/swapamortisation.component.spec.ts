import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapamortisationComponent } from './swapamortisation.component';

describe('SwapamortisationComponent', () => {
  let component: SwapamortisationComponent;
  let fixture: ComponentFixture<SwapamortisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapamortisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapamortisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
