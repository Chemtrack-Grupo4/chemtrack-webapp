import {Component, OnInit} from '@angular/core';
import { CommonModule }      from '@angular/common';
import { MatCardModule }     from '@angular/material/card';
import { MatIconModule }     from '@angular/material/icon';
import { MatInputModule }    from '@angular/material/input';
import {Incident} from '../model/incident';
import {BaseService} from '../../shared/services/base.service';
import {MatIconButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [
    CommonModule,        //  ← soluciona NG8103
    MatCardModule,       //  ← <mat-card>
    MatIconModule,       //  ← <mat-icon>
    MatInputModule,      //  ← matInput
    MatIconButton,
    FormsModule
  ],
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
})
export class IncidentsComponent implements OnInit {
  incidents: Incident[] = [];
  filteredIncidents: Incident[] = [];
  searchText: string = '';

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.loadIncidents();
  }

  loadIncidents(): void {
    this.baseService.getIncidents().subscribe(
      (data: Incident[]) => {
        this.incidents = data;
        this.filteredIncidents = data;
      },
      (error) => {
        console.error('Error fetching incidents:', error);
      }
    );
  }
  filterIncidents(): void {
    this.filteredIncidents = this.incidents.filter((incident) =>
      incident.incidentPlace.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
