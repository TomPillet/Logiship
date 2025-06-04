import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
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
  imports: [
    MatButtonModule,
    MatGridListModule,
    ShipmentListComponent,
    FilterComponent,
  ],
})
export class DashboardComponent {
  public shipments = signal<Shipment[]>([]);
  public selectedStatus = signal<ShipmentStatus | null>(null);
  public simulationInterval: any;

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments.set(this.shipmentService.getShipments());
  }

  public onStatusChange(status: ShipmentStatus | null) {
    this.selectedStatus.set(status);
    this.shipments.set(
      status
        ? this.shipmentService.getShipmentsByStatus(status)
        : this.shipmentService.getShipments()
    );
  }

  public startSimulation() {
    this.simulationInterval = setInterval(() => {
      this.shipmentService.randomStatusUpdate();
      const filteredShipments = this.selectedStatus()
        ? this.shipmentService.getShipmentsByStatus(this.selectedStatus()!)
        : this.shipmentService.getShipments();
      this.shipments.set(filteredShipments);
    }, 5000);
  }

  public stopSimulation() {
    clearInterval(this.simulationInterval);
  }
}
