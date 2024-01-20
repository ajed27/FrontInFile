import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from 'src/app/core';
import { Category } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiService = inject(ApiService);

  getCategories(): Observable<Category>{
    return this.apiService.getAll('category')
  }

}
