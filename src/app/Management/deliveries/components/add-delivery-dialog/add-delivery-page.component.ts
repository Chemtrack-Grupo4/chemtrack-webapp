import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    salida: '',
    ruta: '',
    parada: '',
    combustible: '',
    descripcion: '',
    alertas: ''
  };

  constructor(private router: Router) {}

  onSave() {
    // Aquí puedes llamar a tu servicio para guardar el delivery si lo necesitas
    this.router.navigate(['/deliveries']); // Regresa a la lista
  }

  onCancel() {
    this.router.navigate(['/deliveries']);
  }
}
