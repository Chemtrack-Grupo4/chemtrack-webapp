import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BaseService} from '../../../../shared/services/base.service';

@Component({
  selector: 'app-add-delivery-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-delivery-page.component.html',
  styleUrls: ['./add-delivery-page.component.css'],
})
export class AddDeliveryPageComponent {
  delivery = {
    destination: '',
    exitPoint: '',
    route: '',
    stop: '',
    combustibleType: '',
    packageDescription: '',
    warnings: ''
  };

  constructor(private router: Router, private baseService: BaseService) {}

  onSave() {
    this.baseService.createDelivery(this.delivery).subscribe({
      next: () => {
        this.router.navigate(['/deliveries']); // Regresa a la lista
      },
      error: (err) => {
        console.error('Error al crear el servicio:', err);
      }
    });
  }

  onCancel() {
    this.router.navigate(['/deliveries']);
  }
}
