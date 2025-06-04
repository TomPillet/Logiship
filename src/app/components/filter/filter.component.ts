import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentStatus } from 'src/app/enums/shipment-status.enum';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  standalone: true,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [CommonModule, MatChipsModule],
})
export class FilterComponent {
  public status: ShipmentStatus[] = Object.values(ShipmentStatus);

  constructor() {}
}
