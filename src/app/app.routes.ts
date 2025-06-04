import { Routes } from '@angular/router';
import {IncidentsComponent} from './Incidents/incidents/incidents.component';
import {ServicesComponent} from './Management/services/services.component';
import {MonitoringComponent} from './Management/monitoring/monitoring/monitoring.component';
import {ComponentsComponent} from './Profiles/components/components.component';
import {DeliveriesComponent} from './Management/deliveries/components/deliveries/deliveries.component';
import {DeliveryDetailsComponent} from './Management/deliveries/components/delivery-details/delivery-details.component';
import {LoginComponent} from './Auth/login/login.component';
import {SignupComponent} from './Auth/signup/signup.component';

export const routes: Routes = [
  { path: 'services', component: ServicesComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'monitoring', component: MonitoringComponent },
  { path: 'employees', component: ComponentsComponent },
  { path: 'deliveries', component: DeliveriesComponent },
  { path: 'delivery-details/:id', component: DeliveryDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/services', pathMatch: 'full' } // Ruta por defecto
];
