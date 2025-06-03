import { ShipmentStatus } from '../enums/shipment-status.enum';

export interface Shipment {
  id: number;
  trackingNumber: number;
  recipient: string;
  shippingAddress: string;
  status: ShipmentStatus;
  carrier: string;
  expeditionDate: Date;
  arrivalDate: Date;
}
