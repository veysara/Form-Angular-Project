import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormOrderCoffeeComponent } from './form-order-coffee.component';

describe('TestFormComponent', () => {
  let component: FormOrderCoffeeComponent;
  let fixture: ComponentFixture<FormOrderCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOrderCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrderCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
