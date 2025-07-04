import {Component, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BaseService} from '../../../../shared/services/base.service';
import {Delivery} from '../../model/delivery';
import {ActivatedRoute, Router} from '@angular/router';
import {Device} from '../../model/device.model';
import {BaseSensorService} from '../../../../shared/services/base.sensor.service';

@Component({
    selector: 'app-delivery-details',
    imports: [
        MatCard,
        NgIf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './delivery-details.component.html',
    styleUrl: './delivery-details.component.css'
})
export class DeliveryDetailsComponent implements OnInit {
  delivery: Delivery | null = null
  deliveryId: string | null = null;
  device: Device | null = null;

  constructor(private baseService: BaseService, private route: ActivatedRoute, private router: Router, private baseSensorService: BaseSensorService) {}

  ngOnInit(): void {
    this.deliveryId = this.route.snapshot.paramMap.get('id'); // Obtiene el id de la URL
    if (this.deliveryId) {
      this.loadServices(this.deliveryId);
      this.loadSensorByDeliveryId(this.deliveryId);
    }
  }

  //En caso de contar con el rol del usuario en el local storage, se omite la carga del sensor si el usuario es una empresa.
  /*ngOnInit(): void {
    this.deliveryId = this.route.snapshot.paramMap.get('id'); // Obtiene el id de la URL
    const role = localStorage.getItem('role'); // Obtiene el rol del usuario

    if (this.deliveryId) {
      this.loadServices(this.deliveryId);

      if (role !== 'COMPANY') {
        this.loadSensorByDeliveryId(this.deliveryId);
      }
    }
  }*/

  loadServices(id: string): void {
    this.baseService.getDeliveryById(id).subscribe(data => {
      this.delivery = data;
      console.log('Deliveries:', this.delivery);
    });
  }

  loadSensorByDeliveryId(deliveryId: string): void {
    this.baseSensorService.getSensorByDeliveryId(deliveryId).subscribe(
      (data: Device[]) => {
        this.device = data.length > 0 ? data[0] : null;
        console.log('Sensor:', this.device);
      },
      (error) => {
        console.error('Error al cargar el sensor:', error);
      }
    );
  }

  markAsCompleted(): void {
    if (this.delivery && this.delivery.id) {
      this.baseService.updateDeliveryStateCompleted(this.delivery.id).subscribe({
        next: () => {
          console.log('Delivery marcado como completado');
          this.returnToDeliveries(); // Regresa a la lista de entregas después de completar
        },
        error: (err) => {
          console.error('Error al marcar como completado:', err);
        }
      });
    }
  }

  returnToDeliveries(): void {
    this.router.navigate(['/deliveries']);
  }
}
