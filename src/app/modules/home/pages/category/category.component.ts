import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { News, NewsService } from '../news';
import { Response } from 'src/app/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit{

  private router = inject(Router);
  private news = inject(NewsService);
  private activatedRoute = inject(ActivatedRoute);
  public data: News[] = [];

  public getNews(idCategory: number){
    this.news.getNewByCategroy<News>(idCategory).subscribe((response: Response<News[]>) =>{
      this.data = response.data;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params['id'];
      this.getNews(id);
    });
  }

  selectCategory(id: number){
    this.router.navigateByUrl('/category/' + id);
  }

}
