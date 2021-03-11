import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCargoComponent } from './new-cargo.component';

describe('NewCargoComponent', () => {
  let component: NewCargoComponent;
  let fixture: ComponentFixture<NewCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
