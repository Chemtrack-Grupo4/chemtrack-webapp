import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';
import { MatIconModule    } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  showLogOutButton: boolean = true;
  showMenuIcon: boolean = window.innerWidth <= 600;
  isMenuOpen: boolean = false;
  // Variable para almacenar el rol del usuario
  //userRole: string | null = null;

  constructor(private router: Router) {
    // Inicializa el rol del usuario desde localStorage
    //this.userRole = localStorage.getItem('role'); // Obtiene el rol del usuario desde localStorage

    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      this.showLogOutButton = !(currentRoute === '/login' || currentRoute === '/signup');
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.showMenuIcon = window.innerWidth <= 600; // Actualiza el estado al redimensionar
  }

  logOut(): void {
    this.router.navigate(['/login']);
  }
}
