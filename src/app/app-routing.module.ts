import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeliveriesComponent} from './Management/deliveries/deliveries.component';
import {ServiciosComponent} from './Management/servicios/servicios.component';
import {IncidentsComponent} from './Incidents/incidents/incidents.component';
import {MonitoringComponent} from './Management/monitoring/monitoring/monitoring.component';
import {ComponentsComponent} from './Profiles/components/components.component';

const routes: Routes = [
  { path: 'services', component: ServiciosComponent },
  { path: 'deliveries', component: DeliveriesComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'employees', component: ComponentsComponent },
  { path: '', redirectTo: '/services', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
