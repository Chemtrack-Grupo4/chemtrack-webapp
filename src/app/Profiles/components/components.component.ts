import {Component, OnInit} from '@angular/core';
import {User} from '../model/users';
import {BaseUserService} from '../../shared/services/base.user.service';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  standalone: true,
  imports: [
    MatCard
  ],
  styleUrl: './components.component.css'
})
export class ComponentsComponent implements OnInit {
  users: User[] = [];

  constructor(private baseService: BaseUserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.baseService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
        console.log('Usuarios cargados:', this.users);
      },
      (error) => {
        console.error('Error al cargar los usuarios:', error);
      }
    );
  }
}
