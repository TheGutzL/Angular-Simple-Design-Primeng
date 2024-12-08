import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthStateService } from '../data-access/auth-state.service';

export const authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const authState = inject(AuthStateService);
  const router = inject(Router);

  const token = authState.getSession();

  console.log(token);

  request = request.clone({
    setHeaders: {
      Authorization: `Bearer ${token?.access_token}`,
    },
  });

  return next(request).pipe(
    catchError((error) => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        authState.signOut();
        router.navigateByUrl('/auth/log-in');
      }

      return throwError(() => error);
    })
  );
};