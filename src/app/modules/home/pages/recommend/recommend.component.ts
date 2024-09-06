import { Component, inject } from '@angular/core';

import { News, NewsService } from '../news';
import { Response } from 'src/app/core';
import { RecommendService } from './recommend.service';

@Component({
selector: 'app-recommend',
  templateUrl: './recommend.component.html'
})
export class RecommendComponent {

  private news = inject(NewsService);
  private dataCategory = inject(RecommendService);

  public data: News[] = [];

  public getNews(idCategory: number){
    this.news.getRecommendNews<News>(idCategory).subscribe((response: Response<News[]>) =>{
      this.data = response.data;
    });
  }

  ngOnInit(): void {
    this.dataCategory.currentIdCategory.subscribe((idCategory) => {
      this.getNews(idCategory);
    });
  }

}
