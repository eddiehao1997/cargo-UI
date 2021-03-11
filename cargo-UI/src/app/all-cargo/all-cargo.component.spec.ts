import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCargoComponent } from './all-cargo.component';

describe('AllCargoComponent', () => {
  let component: AllCargoComponent;
  let fixture: ComponentFixture<AllCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
