import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquaresDisplayComponent } from './squares-display.component';

describe('SquaresDisplayComponent', () => {
  let component: SquaresDisplayComponent;
  let fixture: ComponentFixture<SquaresDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquaresDisplayComponent],
    });
    fixture = TestBed.createComponent(SquaresDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
