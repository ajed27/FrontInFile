import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, Response } from 'src/app/core';
import { Category } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiService = inject(ApiService);

  getCategories<T>(): Observable<Response<T[]>>{
    return this.apiService.getAll('category')
  }

}
