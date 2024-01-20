import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService, LocalStorageService } from 'src/app/core';
import { Login } from '../models';
import { Observable, tap } from 'rxjs';
import { Regsiter } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiService = inject(ApiService);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);

  login(body: Login):Observable<Login> {
    return this.apiService.store('login', body).pipe(
      tap( (resp: any) => {
        if( resp.code === 1000 ){
          this.localStorageService.saveItem('token', resp.reply.token);
          this.localStorageService.saveItem('userId', resp.reply.idUser);
          this.router.navigateByUrl('/home');
        }else{
          this.router.navigateByUrl('')
        }
      } )
    );
  }

  register(body: Regsiter):Observable<Regsiter> {
    return this.apiService.store('register', body).pipe(
      tap( (resp: any) => {
        if( resp.code === 1000 ){
          this.localStorageService.saveItem('token', resp.reply.token);
          this.localStorageService.saveItem('userId', resp.reply.idUser);
          this.router.navigateByUrl('/home');
        }else{
          this.router.navigateByUrl('')
        }
      })
    );
  }

  signOut() {
    setTimeout(async () => {
      this.localStorageService.removeItem('token');
      this.localStorageService.removeItem('userId');
      this.router.navigateByUrl('/');
    }, 2000)
  }
}
