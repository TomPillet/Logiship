import { Injectable, signal } from '@angular/core';
import shipmentsMock from '../mock/shipments.mock.json';
import { Shipment } from '../models/shipment.model';
import { ShipmentStatus } from '../enums/shipment-status.enum';

@Injectable({
  providedIn: 'root',
})
export class ShipmentService {
  private _shipments = signal<Shipment[]>([]);
  public shipments = this._shipments.asReadonly();

  constructor() {
    this.loadMockData();
  }

  private loadMockData() {
    const shipmentsData: Shipment[] = shipmentsMock.map((item: any) => ({
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

  private updateStatus(id: number, status: ShipmentStatus) {
    this._shipments.update((shipments) =>
      shipments.map((shipment) => {
        if (shipment.id === id) {
          return {
            ...shipment,
            status,
          };
        }
        return shipment;
      })
    );
  }

  private findNextStatus(status: ShipmentStatus): ShipmentStatus {
    let nextStatus = status;
    switch (status) {
      case ShipmentStatus.PENDING:
        nextStatus = ShipmentStatus.IN_TRANSIT;
        break;
      case ShipmentStatus.IN_TRANSIT:
        nextStatus = ShipmentStatus.DELIVERED;
        break;
      default:
        break;
    }
    return nextStatus;
  }

  public getShipments(): Shipment[] {
    return this.shipments();
  }

  public getShipmentsByStatus(status: ShipmentStatus): Shipment[] {
    return this.shipments().filter((shipment) => shipment.status === status);
  }

  public randomStatusUpdate(): RandomStatusUpdateResponse {
    const randomIndex = Math.floor(Math.random() * this.shipments().length);
    const shipment = this._shipments()[randomIndex];

    if (
      shipment.status === ShipmentStatus.CANCELLED ||
      shipment.status === ShipmentStatus.DELIVERED
    ) {
      return { success: false, shipment: shipment };
    }

    const nextStatus = this.findNextStatus(shipment.status);
    this.updateStatus(shipment.id, nextStatus);
    return { success: true, shipment: shipment, nextStatus };
  }
}

export interface RandomStatusUpdateResponse {
  success: boolean;
  shipment: Shipment;
  nextStatus?: ShipmentStatus;
}
