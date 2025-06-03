import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Shipment } from 'src/app/models/shipment.model';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  standalone: true,
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],
  imports: [MatGridListModule],
})
export class DashboardComponentComponent {
  shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments = this.shipmentService.getShipments();
  }
}
