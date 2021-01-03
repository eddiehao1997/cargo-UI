import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoSignUpComponent } from './cargo-sign-up.component';

describe('CargoSignUpComponent', () => {
  let component: CargoSignUpComponent;
  let fixture: ComponentFixture<CargoSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
