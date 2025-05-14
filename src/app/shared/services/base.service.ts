import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Servicios} from '../../Management/servicios/model/servicios';
import {Delivery} from '../../Management/deliveries/model/delivery';
import {Incident} from '../../Incidents/model/incident';
import {Sensor} from '../../Management/monitoring/model/monitoring';


@Injectable({
  providedIn: 'root'
})

export class BaseService {
  private apiUrl = 'https://safe-flow-api.sfo1.zeabur.app/api/safe-flow/v1';

  constructor(private http: HttpClient) {}

  // Configurar Headers (si es necesario, por ejemplo para autenticación)
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // --- Métodos para Sensors ---
  getSensors(): Observable<Sensor[]> {
    console.log('Calling getSensors API'); // Log para verificar que se llama al método
    return this.http.get<Sensor[]>(`${this.apiUrl}/sensors`);
  }
  getSensorById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/sensors/${id}`);
  }

  createSensor(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sensors`, data, this.httpOptions);
  }

  updateSensor(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sensors/${id}`, data, this.httpOptions);
  }

  deleteSensor(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/sensors/${id}`);
  }

  // --- Métodos para Incidents ---
  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(`${this.apiUrl}/incidents`);
  }

  getIncidentById(id: string): Observable<Incident> {
    return this.http.get<Incident>(`${this.apiUrl}/incidents/${id}`);
  }

  createIncident(data: Incident): Observable<Incident> {
    return this.http.post<Incident>(`${this.apiUrl}/incidents`, data, this.httpOptions);
  }

  deleteIncident(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/incidents/${id}`);
  }

  // --- Métodos para Services ---
  getServices(): Observable<Servicios[]> {
    return this.http.get<Servicios[]>(`${this.apiUrl}/services`);
  }

  getServiceById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/services/${id}`);
  }

  createService(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/services`, data, this.httpOptions);
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/services/${id}`);
  }

  // --- Métodos para Deliveries ---
  getDeliveries(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.apiUrl}/deliveries`);
  }

  getDeliveryById(id: string): Observable<Delivery> {
    return this.http.get<Delivery>(`${this.apiUrl}/deliveries/${id}`);
  }

  createDelivery(data: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(`${this.apiUrl}/deliveries`, data, this.httpOptions);
  }

  deleteDelivery(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deliveries/${id}`);
  }

}
