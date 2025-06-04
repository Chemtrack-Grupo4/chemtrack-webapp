import {Component, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BaseService} from '../../../../shared/services/base.service';
import {Delivery} from '../../model/delivery';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delivery-details',
  standalone: true,
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

  constructor(private baseService: BaseService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.deliveryId = this.route.snapshot.paramMap.get('id'); // Obtiene el id de la URL
    if (this.deliveryId) {
      this.loadServices(this.deliveryId);
    }
  }

  loadServices(id: string): void {
    this.baseService.getDeliveryById(id).subscribe(data => {
      this.delivery = data;
      console.log('Deliveries:', this.delivery);
    });
  }
  returnToDeliveries(): void {
    this.router.navigate(['/deliveries']);
  }
}
