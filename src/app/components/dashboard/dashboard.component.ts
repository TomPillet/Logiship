import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ShipmentListComponent } from '../shipment-list/shipment-list.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [MatGridListModule, ShipmentListComponent, FilterComponent],
})
export class DashboardComponent {}
