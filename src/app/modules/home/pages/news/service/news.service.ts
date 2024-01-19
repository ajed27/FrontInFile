import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/core';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiService = inject(ApiService);

  getAllNews(): Observable<News[]>{
    return this.apiService.getAll('news')
  }

  getOneNew(idNew: number): Observable<News>{
    return this.apiService.getById('news', idNew);
  }
}
