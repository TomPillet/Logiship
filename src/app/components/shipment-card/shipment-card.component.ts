import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shipment } from 'src/app/models/shipment.model';
import {
  ShipmentStatus,
  getColorByStatus,
} from 'src/app/enums/shipment-status.enum';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-shipment-card',
  templateUrl: './shipment-card.component.html',
  styleUrls: ['./shipment-card.component.css'],
  imports: [CommonModule, MatCardModule],
})
export class ShipmentCardComponent {
  @Input()
  public shipment!: Shipment;

  public getColorByStatus(status: ShipmentStatus): string {
    return getColorByStatus(status);
  }

  constructor() {}
}
