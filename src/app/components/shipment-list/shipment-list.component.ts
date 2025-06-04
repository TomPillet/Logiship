import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Shipment } from 'src/app/models/shipment.model';
import { ShipmentService } from 'src/app/services/shipment.service';
import { ShipmentCardComponent } from '../shipment-card/shipment-card.component';

@Component({
  standalone: true,
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css'],
  imports: [CommonModule, MatGridListModule, ShipmentCardComponent],
})
export class ShipmentListComponent {
  public shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments = this.shipmentService.getShipments();
    console.log('shipments', this.shipments);
  }
}
