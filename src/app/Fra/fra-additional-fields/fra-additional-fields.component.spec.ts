import { FraAdditionalFieldsComponent } from './fra-additional-fields.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';



describe('AdditionalFieldsComponent', () => {
  let component: FraAdditionalFieldsComponent;
  let fixture: ComponentFixture<FraAdditionalFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraAdditionalFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraAdditionalFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
