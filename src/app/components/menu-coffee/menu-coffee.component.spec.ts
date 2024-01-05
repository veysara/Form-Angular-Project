import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCoffeeComponent } from './menu-coffee.component';

describe('MenuCoffeeComponent', () => {
  let component: MenuCoffeeComponent;
  let fixture: ComponentFixture<MenuCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
