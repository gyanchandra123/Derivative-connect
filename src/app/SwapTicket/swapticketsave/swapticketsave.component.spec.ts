import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapticketsaveComponent } from './swapticketsave.component';

describe('SwapticketsaveComponent', () => {
  let component: SwapticketsaveComponent;
  let fixture: ComponentFixture<SwapticketsaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapticketsaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapticketsaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
