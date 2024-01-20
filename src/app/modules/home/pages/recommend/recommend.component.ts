import { Component, inject } from '@angular/core';
import { News, NewsService } from '../news';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html'
})
export class RecommendComponent {

  private news = inject(NewsService);
  public data: News[] = [];

  public getNews(){
    this.news.getRecommendNews().subscribe((resp: any) =>{
      this.data = resp.reply;
    });
  }

  ngOnInit(): void {
    this.getNews();
  }

}
