import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoHotelComponent } from './contacto-hotel.component';

describe('ContactoHotelComponent', () => {
  let component: ContactoHotelComponent;
  let fixture: ComponentFixture<ContactoHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoHotelComponent]
    });
    fixture = TestBed.createComponent(ContactoHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
