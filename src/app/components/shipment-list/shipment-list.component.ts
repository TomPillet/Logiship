
import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Shipment } from 'src/app/models/shipment.model';
import { ShipmentCardComponent } from '../shipment-card/shipment-card.component';

@Component({
  standalone: true,
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css'],
  imports: [MatGridListModule, ShipmentCardComponent],
})
export class ShipmentListComponent {
  @Input() shipments: Shipment[] = [];
}
