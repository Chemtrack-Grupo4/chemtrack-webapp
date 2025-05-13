// src/app/components/incidents/incidents.component.ts
import { Component, OnInit } from '@angular/core';
import {Incident} from '../model/incident';
import {BaseService} from '../../shared/services/base.service';


@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {
  incidents: Incident[] = [];

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.baseService.getIncidents().subscribe(
      (data: Incident[]) => {
        this.incidents = data;
      },
      (error) => {
        console.error('Error fetching incidents:', error);
      }
    );
  }
}
