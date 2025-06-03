import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentCardComponentComponent } from './shipment-card-component.component';

describe('ShipmentCardComponentComponent', () => {
  let component: ShipmentCardComponentComponent;
  let fixture: ComponentFixture<ShipmentCardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentCardComponentComponent]
    });
    fixture = TestBed.createComponent(ShipmentCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
