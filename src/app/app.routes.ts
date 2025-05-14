import { Routes } from '@angular/router';
import {IncidentsComponent} from './Incidents/incidents/incidents.component';
import {ServicesComponent} from './Management/services/services.component';

export const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: '', redirectTo: '/services', pathMatch: 'full' } // Ruta por defecto
];
