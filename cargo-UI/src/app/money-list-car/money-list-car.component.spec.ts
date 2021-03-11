import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyListCarComponent } from './money-list-car.component';

describe('MoneyListCarComponent', () => {
  let component: MoneyListCarComponent;
  let fixture: ComponentFixture<MoneyListCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyListCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyListCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
