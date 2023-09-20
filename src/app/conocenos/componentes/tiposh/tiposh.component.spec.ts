import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposhComponent } from './tiposh.component';

describe('TiposhComponent', () => {
  let component: TiposhComponent;
  let fixture: ComponentFixture<TiposhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposhComponent]
    });
    fixture = TestBed.createComponent(TiposhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
