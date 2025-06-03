import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Shipment } from 'src/app/models/shipment.model';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [MatGridListModule],
})
export class DashboardComponent {
  shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments = this.shipmentService.getShipments();
  }
}
