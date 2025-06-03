import { Injectable, signal } from '@angular/core';
import * as shipmentsMock from '../mock/shipments.mock.json';
import { Shipment } from '../models/shipment.model';
import { ShipmentStatus } from '../enums/shipment-status.enum';

@Injectable({
  providedIn: 'root',
})
export class ShipmentServiceService {
  private _shipments = signal<Shipment[]>([]);
  public shipments = this._shipments.asReadonly();

  constructor() {
    this.loadMockData();
  }

  private loadMockData() {
    const shipmentsData: Shipment[] = shipmentsMock.map((item) => ({
      ...item,
      status: this.validateStatus(item.status),
      expeditionDate: new Date(item.expeditionDate),
      arrivalDate: new Date(item.arrivalDate),
    }));
    this._shipments.set(shipmentsData);
  }

  private validateStatus(status: string): ShipmentStatus {
    if (Object.values(ShipmentStatus).includes(status as ShipmentStatus)) {
      return status as ShipmentStatus;
    }
    return ShipmentStatus.PENDING;
  }

  getShipments() {
    return this.shipments;
  }
}
