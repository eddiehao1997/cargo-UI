import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSignUpComponent } from './car-sign-up.component';

describe('CarSignUpComponent', () => {
  let component: CarSignUpComponent;
  let fixture: ComponentFixture<CarSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
