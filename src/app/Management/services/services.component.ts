import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Services} from './model/services';
import {BaseService} from '../../shared/services/base.service';
import {MatCard} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    NgClass
  ],
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
