import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { ShipmentListComponentComponent } from './components/shipment-list-component/shipment-list-component.component';
import { ShipmentCardComponentComponent } from './components/shipment-card-component/shipment-card-component.component';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentListComponentComponent,
    ShipmentCardComponentComponent,
    FilterComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardComponentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
