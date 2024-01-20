import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { LocalStorageService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);

  canActivate(): boolean {

    const token = this.localStorageService.getItem('token');
    if (!token) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}
