import { Component, EventEmitter, Output, signal } from '@angular/core';
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
  @Output() selectedStatusChange = new EventEmitter<ShipmentStatus | null>();
  public selectedStatus = signal<ShipmentStatus | null>(null);
  public status: ShipmentStatus[] = Object.values(ShipmentStatus);

  constructor() {}

  public onStatusSelect(status: ShipmentStatus) {
    this.selectedStatus.set(status === this.selectedStatus() ? null : status);
    this.selectedStatusChange.emit(this.selectedStatus());
  }
}
