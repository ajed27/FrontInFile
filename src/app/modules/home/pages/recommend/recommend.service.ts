import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecommendService {

  private idCategorySource = new BehaviorSubject<number>(2);
  currentIdCategory = this.idCategorySource.asObservable(); 

  changeIdCategory(idCategory: number) {
    this.idCategorySource.next(idCategory);
  }

  getIdCategory(): number {
    return this.idCategorySource.getValue();
  }

}
