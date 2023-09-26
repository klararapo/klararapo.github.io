import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingRowComponent } from './standing-row.component';

describe('StandingRowComponent', () => {
  let component: StandingRowComponent;
  let fixture: ComponentFixture<StandingRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StandingRowComponent]
    });
    fixture = TestBed.createComponent(StandingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
