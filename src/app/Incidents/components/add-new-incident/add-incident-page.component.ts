import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-incident-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-incident-page.component.html',
  styleUrls: ['./add-incident-page.component.css'],
})
export class AddIncidentPageComponent {
  incident = {
    name: '',
    description: '',
    damage: '',
    status: ''
  };

  onSave() {
    // Aquí puedes manejar el envío del formulario (ejemplo: llamar servicio, navegar, etc.)
    alert(JSON.stringify(this.incident, null, 2));
  }

  onCancel() {
    // Aquí puedes limpiar el formulario o navegar a otra página si es necesario
    window.history.back();
  }
}
