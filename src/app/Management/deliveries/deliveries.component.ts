import {Component, OnInit} from '@angular/core';
import {Delivery} from './model/delivery';
import {BaseService} from '../../shared/services/base.service';
import {Router} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Incident} from '../../Incidents/model/incident';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MatIconButton,
    MatInput,
    ReactiveFormsModule,
    FormsModule
  ],
  styleUrl: './deliveries.component.css'
})
export class DeliveriesComponent implements OnInit {
  deliveries: Delivery[] = [];
  filteredDeliveries: Delivery[] = [];
  searchText: string = '';

  constructor(private baseService: BaseService, private router: Router) {}

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries(): void {
    this.baseService.getDeliveries().subscribe(
      (data: Delivery[]) => {
        this.deliveries = data;
        this.filteredDeliveries = data;
      },
      (error) => {
        console.error('Error loading deliveries:', error);
      }
    );
  }

  onAccept(delivery: Delivery): void {
    console.log('Accepted:', delivery);
    // Aquí puedes agregar lógica para manejar la aceptación del delivery
  }

  onDecline(delivery: Delivery): void {
    console.log('Declined:', delivery);
    // Aquí puedes agregar lógica para manejar el rechazo del delivery
  }

  onStartMonitoring() {
    this.router.navigate(['/monitoring']); // Navegar a la pantalla de monitoreo
  }

  filterDeliveries(): void {
    this.filteredDeliveries = this.deliveries.filter((incident) =>
      incident.destination.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
