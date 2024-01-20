import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environment/environments';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = `${environment.api}`;

  private http = inject(HttpClient);
  private localStorage = inject(LocalStorageService);

  getHeaders(): HttpHeaders | null{
    const token = this.localStorage.getItem('token');
    const userId = this.localStorage.getItem('userId');
    if (token != null && userId != null){
      return new HttpHeaders({
        'userId': userId,
        'token': token
      });
    }else{
      return null;
    }
  }

  getAll(path: string): Observable<any> {
    const headers = this.getHeaders();
    console.log(headers)
    if(headers != null){
      return this.http.get(`${this.apiUrl}${path}`, {headers});
    }
    return this.http.get(`${this.apiUrl}${path}`);
  }

  getById(path: string, id: number | string): Observable<any> {
    const headers = this.getHeaders();
    if(headers != null){
      return this.http.get(`${this.apiUrl}${path}/${id}`, {headers});
    }
    return this.http.get(`${this.apiUrl}${path}/${id}`);
  }

  store(path: string, body: any): Observable<any> {
    const headers = this.getHeaders();
    if(headers != null){
      return this.http.post(`${this.apiUrl}${path}`, body, {headers});
    }
    return this.http.post(`${this.apiUrl}${path}`, body);
  }
}
