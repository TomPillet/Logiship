import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentCardComponent } from './shipment-card.component';

describe('ShipmentCardComponent', () => {
  let component: ShipmentCardComponent;
  let fixture: ComponentFixture<ShipmentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentCardComponent],
    });
    fixture = TestBed.createComponent(ShipmentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
