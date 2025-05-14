import {Component, OnInit} from '@angular/core';
import {Delivery} from './model/delivery';
import {BaseService} from '../../shared/services/base.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrl: './deliveries.component.css'
})
export class DeliveriesComponent implements OnInit {
  deliveries: Delivery[] = [];

  constructor(private baseService: BaseService, private router: Router) {}

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries(): void {
    this.baseService.getDeliveries().subscribe(
      (data: Delivery[]) => {
        this.deliveries = data;
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
}
