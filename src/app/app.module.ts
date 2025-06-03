import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShipmentListComponent } from './components/shipment-list/shipment-list.component';
import { ShipmentCardComponent } from './components/shipment-card/shipment-card.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentListComponent,
    ShipmentCardComponent,
    FilterComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, DashboardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
