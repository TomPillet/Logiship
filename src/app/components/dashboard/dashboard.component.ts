import { Component, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { ShipmentListComponent } from '../shipment-list/shipment-list.component';
import { FilterComponent } from '../filter/filter.component';
import { ShipmentStatus } from 'src/app/enums/shipment-status.enum';
import { Shipment } from 'src/app/models/shipment.model';
import {
  ShipmentService,
  RandomStatusUpdateResponse,
} from 'src/app/services/shipment.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    ShipmentListComponent,
    FilterComponent,
  ],
})
export class DashboardComponent {
  public isSimulationRunning = signal<boolean>(false);
  public shipments = signal<Shipment[]>([]);
  public selectedStatus = signal<ShipmentStatus | null>(null);
  public simulatedResponse = signal<RandomStatusUpdateResponse | null>(null);
  public simulationInterval: any;

  constructor(private shipmentService: ShipmentService) {}

  ngOnInit() {
    this.shipments.set(this.shipmentService.getShipments());
  }

  public onStatusChange(status: ShipmentStatus | null) {
    this.selectedStatus.set(status);
    this.updateShipments();
  }

  public startSimulation() {
    if (this.isSimulationRunning()) {
      return;
    }
    this.simulationInterval = setInterval(() => {
      this.simulatedResponse.set(this.shipmentService.randomStatusUpdate());
      this.updateShipments();
    }, 5000);
    this.isSimulationRunning.set(true);
  }

  public stopSimulation() {
    if (this.isSimulationRunning()) {
      clearInterval(this.simulationInterval);
      this.isSimulationRunning.set(false);
    }
  }

  private updateShipments() {
    const status = this.selectedStatus();
    const shipmentsToDisplay = status
      ? this.shipmentService.getShipmentsByStatus(status)
      : this.shipmentService.getShipments();
    this.shipments.set(shipmentsToDisplay);
  }

  public resetShipments() {
    this.stopSimulation();
    this.selectedStatus.set(null);
    this.simulatedResponse.set(null);
    this.shipmentService.resetShipments();
    this.updateShipments();
  }

  ngOnDestroy() {
    clearInterval(this.simulationInterval);
  }
}
