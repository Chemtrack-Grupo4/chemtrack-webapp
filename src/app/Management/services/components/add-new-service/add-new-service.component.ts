import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-service',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './add-new-service.component.html',
  styleUrl: './add-new-service.component.css'
})
export class AddNewServiceComponent {
  service = {
    nameService: '',
    description: '',
    incidents: ''
  };

  constructor(private router: Router) {}

  onSave() {
    // Aquí puedes llamar a tu servicio para guardar el delivery si lo necesitas
    this.router.navigate(['/services']); // Regresa a la lista
  }

  onCancel() {
    this.router.navigate(['/services']);
  }
}
