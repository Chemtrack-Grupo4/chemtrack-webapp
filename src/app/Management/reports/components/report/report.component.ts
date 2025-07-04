import {Component, OnInit} from '@angular/core';
import {Device} from '../../../deliveries/model/device.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseSensorService} from '../../../../shared/services/base.sensor.service';
import {MatCard} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Record} from '../../model/record.model';
import {Delivery} from '../../../deliveries/model/delivery';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    MatCard,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit {
  record: Record | null = null
  delivery: Delivery | null = null;
  deliveryId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private baseSensorService: BaseSensorService) {}

  ngOnInit(): void {
    this.deliveryId = this.route.snapshot.paramMap.get('id'); // Obtiene el id de la URL
    if (this.deliveryId) {
      this.loadReport(this.deliveryId);
    }
  }

  loadReport(id: string): void {
    this.baseSensorService.getRecordsByDeliveryId(id).subscribe(
      (data: Record[]) => {
        this.record = data.length > 0 ? data[0] : null;
        console.log('Sensor:', this.record);
      },
      (error) => {
        console.error('Error al cargar el sensor:', error);
    });
  }

  returnToDeliveries(): void {
    this.router.navigate(['/deliveries']);
  }
}
