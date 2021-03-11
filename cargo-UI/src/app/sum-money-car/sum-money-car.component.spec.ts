import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumMoneyCarComponent } from './sum-money-car.component';

describe('SumMoneyCarComponent', () => {
  let component: SumMoneyCarComponent;
  let fixture: ComponentFixture<SumMoneyCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumMoneyCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumMoneyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
