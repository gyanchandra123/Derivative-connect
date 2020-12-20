import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetBlotComponent } from './asset-blot.component';

describe('AssetBlotComponent', () => {
  let component: AssetBlotComponent;
  let fixture: ComponentFixture<AssetBlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetBlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetBlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
