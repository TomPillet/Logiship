export enum ShipmentStatus {
  PENDING = 'PENDING',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export function getColorByStatus(status: ShipmentStatus): string {
  switch (status) {
    case ShipmentStatus.PENDING:
      return '#f2ca95';
    case ShipmentStatus.IN_TRANSIT:
      return '#949ce7';
    case ShipmentStatus.DELIVERED:
      return '#71c474';
    case ShipmentStatus.CANCELLED:
      return '#f46358';
    default:
      return '#fff';
  }
}
