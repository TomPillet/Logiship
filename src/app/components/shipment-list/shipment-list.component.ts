import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Shipment } from 'src/app/models/shipment.model';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  standalone: true,
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css'],
  imports: [MatGridListModule],
})
export class ShipmentListComponent {
  shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments = this.shipmentService.getShipments();
    console.log('shipments', this.shipments);
  }
}
