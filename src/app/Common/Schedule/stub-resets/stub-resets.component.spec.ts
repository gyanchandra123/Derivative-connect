import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StubResetsComponent } from './stub-resets.component';

describe('StubResetsComponent', () => {
  let component: StubResetsComponent;
  let fixture: ComponentFixture<StubResetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StubResetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StubResetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
