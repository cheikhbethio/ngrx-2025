import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { UserAuth } from '../core/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
	authService = inject(AuthService);
	router = inject(Router);
	
	loginForm = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});

	login() {
		console.log(this.loginForm.value);
		this.authService.login(this.loginForm.value as UserAuth).subscribe({
			next: (token) => {
				console.log('Login successful, redirecting to admin/stock', token);
				this.router.navigate(['/admin/stock']);
			},
			error: (error) => {
				console.error('Login failed', error);
			}
		});
	}
}
