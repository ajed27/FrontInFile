import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environment/environments';
import { LocalStorageService } from './local-storage.service';
import { Response } from '../interfaces';

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

  getAll<T>(path: string): Observable<Response<T[]>> {
    const headers = this.getHeaders();
    console.log(headers)
    if(headers != null){
      return this.http.get<Response<T[]>>(`${this.apiUrl}${path}`, {headers});
    }
    return this.http.get<Response<T[]>>(`${this.apiUrl}${path}`);
  }

  getAllPage<T>(path: string, id: number): Observable<Response<T[]>> {
    const headers = this.getHeaders();
    console.log(headers)
    if(headers != null){
      return this.http.get<Response<T[]>>(`${this.apiUrl}${path}/${id}`, {headers});
    }
    return this.http.get<Response<T[]>>(`${this.apiUrl}${path}/${id}`);
  }

  getById<T>(path: string, id: number | string): Observable<Response<T>> {
    const headers = this.getHeaders();
    if(headers != null){
      return this.http.get<Response<T>>(`${this.apiUrl}${path}/${id}`, {headers});
    }
    return this.http.get<Response<T>>(`${this.apiUrl}${path}/${id}`);
  }

  store<T>(path: string, body: any): Observable<Response<T>> {
    const headers = this.getHeaders();
    if(headers != null){
      return this.http.post<Response<T>>(`${this.apiUrl}${path}`, body, {headers});
    }
    return this.http.post<Response<T>>(`${this.apiUrl}${path}`, body);
  }
}
