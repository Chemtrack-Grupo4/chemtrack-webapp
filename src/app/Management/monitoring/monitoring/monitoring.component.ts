// monitoring.component.ts
import { Component, OnInit } from '@angular/core';
import {Sensor} from '../model/monitoring';
import {BaseService} from '../../../shared/services/base.service';
import {BaseSensorService} from '../../../shared/services/base.sensor.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
  sensors: Sensor[] = [];

  constructor(private baseSensorService: BaseSensorService) {}

  ngOnInit(): void {
    this.loadSensors();


  }

  loadSensors(): void {
    this.baseSensorService.getSensors().subscribe(
      (data: Sensor[]) => {
        console.log('Sensors loaded:', data); // Verificar que los datos se reciben correctamente
        this.sensors = data;
      },
      (error) => {
        console.error('Error loading sensors:', error); // Mostrar el error si la carga falla
      }
    );
  }
}
