import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShipmentListComponent } from '../shipment-list/shipment-list.component';
import { FilterComponent } from '../filter/filter.component';
import { ShipmentStatus } from 'src/app/enums/shipment-status.enum';
import { Shipment } from 'src/app/models/shipment.model';
import { ShipmentService } from 'src/app/services/shipment.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [MatGridListModule, ShipmentListComponent, FilterComponent],
})
export class DashboardComponent {
  public shipments: Shipment[] = [];

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments = this.shipmentService.getShipments();
  }

  public onStatusChange(status: ShipmentStatus | null) {
    this.shipments = status
      ? this.shipmentService.getShipmentsByStatus(status)
      : this.shipmentService.getShipments();
  }
}
