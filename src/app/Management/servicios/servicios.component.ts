// servicios.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from '../../shared/services/base.service';
import { Servicios } from './model/servicios';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  services: Servicios[] = [];

  constructor(private baseService: BaseService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.baseService.getServices().subscribe(data => {
      this.services = data;
      console.log('Servicios:', this.services);
    });
  }





}
