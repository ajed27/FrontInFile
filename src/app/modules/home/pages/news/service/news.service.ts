import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, Response } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiService = inject(ApiService);

  getAllNews<T>(): Observable<Response<T[]>>{
    return this.apiService.getAll('news')
  }

  getRecommendNews<T>(idCategory: number): Observable<Response<T[]>>{
    return this.apiService.getAllPage('news/recommend', idCategory)
  }

  getOneNew<T>(idNew: number): Observable<Response<T>>{
    return this.apiService.getById('news', idNew);
  }

  getNewByCategroy<T>(idCategory: number): Observable<Response<T[]>>{
    return this.apiService.getAllPage('news/category', idCategory)
  }
}
