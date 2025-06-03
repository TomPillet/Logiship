import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentListComponentComponent } from './shipment-list-component.component';

describe('ShipmentListComponentComponent', () => {
  let component: ShipmentListComponentComponent;
  let fixture: ComponentFixture<ShipmentListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentListComponentComponent]
    });
    fixture = TestBed.createComponent(ShipmentListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
