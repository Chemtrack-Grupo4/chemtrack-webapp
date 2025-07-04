import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-signup',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignup() {
    this.authService.signup({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe({
      next: () => this.router.navigate(['/login']),
      error: () => this.error = 'Registration failed'
    });
  }
}
