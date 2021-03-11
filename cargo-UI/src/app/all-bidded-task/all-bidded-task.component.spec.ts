import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBiddedTaskComponent } from './all-bidded-task.component';

describe('AllBiddedTaskComponent', () => {
  let component: AllBiddedTaskComponent;
  let fixture: ComponentFixture<AllBiddedTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBiddedTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBiddedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
