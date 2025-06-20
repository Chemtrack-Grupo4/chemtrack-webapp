import { Component, OnInit } from '@angular/core';
import { Delivery } from '../../model/delivery';
import { BaseService } from '../../../../shared/services/base.service';
import {Router, RouterLink} from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Incident } from '../../../../Incidents/model/incident';
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
    MatInput,
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

  onStartMonitoring() {
    this.router.navigate(['/monitoring']); // Navegar a la pantalla de monitoreo
  }

  filterDeliveries(): void {
    this.filteredDeliveries = this.deliveries.filter((incident) =>
      incident.destination.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addNewDelivery(): void {
    const dialogRef = this.dialog.open(AddDeliveryPageComponent, {
      width: '400px',
      panelClass: 'centered-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deliveries.push({
          ...result,
          id: Math.random(),
          packageDescription: result.descripcion || '',
        });
        this.filterDeliveries();
      }
    });
  }


}
