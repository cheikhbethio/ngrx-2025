import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  
  const authService = inject(AuthService);
  const router = inject(Router);


	
  return authService.isAuthenticated().pipe(
		map(isAuthenticated => {
			console.log(' isAuthenticated:', isAuthenticated);
      if (isAuthenticated) {
        return true;
      } else {
        console.warn('User not authenticated, redirecting to login.');
        return router.createUrlTree(['/home']);
      }
    })
  );

}; 