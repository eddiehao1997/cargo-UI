import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBidableCargoComponent } from './all-bidable-cargo.component';

describe('AllBidableCargoComponent', () => {
  let component: AllBidableCargoComponent;
  let fixture: ComponentFixture<AllBidableCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBidableCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBidableCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
