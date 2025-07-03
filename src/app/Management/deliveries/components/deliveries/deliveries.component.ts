import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { BaseService } from '../../../../shared/services/base.service';
import {Router, RouterLink} from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {AddDeliveryPageComponent} from '../add-delivery-dialog/add-delivery-page.component';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MatIconButton,
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  styleUrl: './deliveries.component.css'
})
export class DeliveriesComponent implements OnInit {
  deliveries: Delivery[] = [];
  filteredDeliveries: Delivery[] = [];
  searchText: string = '';

  constructor(
    private baseService: BaseService,
    private router: Router,
    private dialog: MatDialog
  ) {}

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

  onDetails(delivery: Delivery): void {
    console.log('Accepted:', delivery);
    this.router.navigate(['/delivery-details', delivery.id]);
  }

  onAccept(delivery: Delivery): void {
    this.baseService.updateDeliveryState(delivery.id, 1).subscribe({
      next: () => {
        console.log('Delivery aceptado:', delivery);
        this.loadDeliveries(); // Recargar la lista de deliveries
      },
      error: (err) => {
        console.error('Error al aceptar el delivery:', err);
      }
    });
  }

  onDecline(delivery: Delivery): void {
    this.baseService.deleteDelivery(delivery.id).subscribe({
      next: () => {
        console.log('Delivery eliminado:', delivery);
        this.loadDeliveries(); // Recargar la lista de deliveries
      },
      error: (err) => {
        console.error('Error al eliminar el delivery:', err);
      }
    });
  }

  filterDeliveries(): void {
    this.filteredDeliveries = this.deliveries.filter((incident) =>
      incident.destination.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
