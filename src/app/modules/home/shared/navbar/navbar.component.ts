import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/app/core';

import { AuthService, Category, CategoryService } from 'src/app/modules';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private categories = inject(CategoryService);
  public categoriesList: Category[] = [];

  public logOut(){
    this.router.navigateByUrl('/');
    this.authService.signOut(); 
  }

  public getCategories(){
    this.categories.getCategories<Category>().subscribe((resp: Response<Category[]>) => {
      this.categoriesList = resp.data;
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  selectCategory(id: number){
    this.router.navigateByUrl('/category/' + id);
  }

}