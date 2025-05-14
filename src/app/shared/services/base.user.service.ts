import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Servicios} from '../../Management/servicios/model/servicios';
import {Delivery} from '../../Management/deliveries/model/delivery';
import {Incident} from '../../Incidents/model/incident';
import {Sensor} from '../../Management/monitoring/model/monitoring';
import {User} from '../../Profiles/model/users';


@Injectable({
  providedIn: 'root'
})

export class BaseUserService {
  private apiUrl = 'https://safe-flow-api.sfo1.zeabur.app/api/v1';

  constructor(private http: HttpClient) {}

  // Configurar Headers (si es necesario, por ejemplo para autenticación)
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // --- Métodos para Sensors ---
  // Método para obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // Método para obtener un usuario específico por ID
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${userId}`);
  }

}

