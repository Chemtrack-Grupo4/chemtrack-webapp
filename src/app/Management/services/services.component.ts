import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Services} from './model/services';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-services',
  imports: [
    MatCard,
    MatIcon
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services: Services[] = [];

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
