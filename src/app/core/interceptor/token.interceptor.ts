import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { TokenService } from '../services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const tokenService = inject(TokenService);

  const token = tokenService.getToken()?.toString();
  if (req.url.includes('validateLogin') || req.url.includes('login')) {
    return next(req);
  }
  console.log('aca ando interceptando')
  if (!token) {
    return next(req);
  }

  const request = req.clone({
    headers: req.headers.set('token', 'password'),
  });
  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError(() => new Error(error.message));
    })
  );
};