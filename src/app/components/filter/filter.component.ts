import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

import { ShipmentStatus } from 'src/app/enums/shipment-status.enum';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  standalone: true,
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [MatChipsModule],
})
export class FilterComponent {
  @Input() selectedStatus: ShipmentStatus | null = null;
  @Output() selectedStatusChange = new EventEmitter<ShipmentStatus | null>();
  public statuses: ShipmentStatus[] = Object.values(ShipmentStatus);

  constructor() {}

  public onStatusSelect(status: ShipmentStatus) {
    this.selectedStatus = status === this.selectedStatus ? null : status;
    this.selectedStatusChange.emit(this.selectedStatus);
  }
}
