import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserAuth } from '../types';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../store/selectors';
import { AuthActions } from '../store/actions';
@Injectable({
  providedIn: 'root' // Service available application-wide
})
export class AuthService {

	router = inject(Router);
	store = inject(Store);

  isAuthenticated(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated);
  }

  login(userPayload: UserAuth): Observable<boolean> {
		console.log('Simulating login...', userPayload);
		if (userPayload.username === 'admin' && userPayload.password === 'admin') {
			console.log('Login successful send to next');
			this.store.dispatch(AuthActions.login({ user: userPayload }));
			return of(true);
		}
    // Login failed
    this.store.dispatch(AuthActions.logout());
    return of(false);
  }

  logout(): void {
    console.log('Logging out...');
    this.store.dispatch(AuthActions.logout());
		this.router.navigate(['/home']);
  }

} 