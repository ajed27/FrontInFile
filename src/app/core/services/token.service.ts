import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private nameToken = 'token';
  private localStorage = inject(LocalStorageService);

  getToken() {
    const token = this.localStorage.getItem(this.nameToken);
    return token;
  }

}
