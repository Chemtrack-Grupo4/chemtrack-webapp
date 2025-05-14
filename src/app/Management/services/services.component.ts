// src/app/Management/services/services.component.ts
import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatCardModule }   from '@angular/material/card';
import { MatIconModule }   from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Observable } from 'rxjs';

import { Servicios }   from '../servicios/model/servicios';
import { BaseService } from '../../shared/services/base.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,          // | async
    MatCardModule,
    MatIconModule,
    MatInputModule,     // <input matInput>
    MatButtonModule,    // <button mat-icon-button>
    MatDialogModule,
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  /** Flujo reactivo de servicios */
  services$!: Observable<Servicios[]>;

  constructor(
    private baseService: BaseService,
    private dialog: MatDialog,
  ) {
    this.services$ = this.baseService.getServices();
  }

  /** trackBy para *ngFor – usa el id único de cada servicio */
  trackById(_: number, service: Servicios): string | number {
    return service.id;            // ajusta si tu modelo usa otro campo
  }
}
