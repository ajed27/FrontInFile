import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from './service/news.service';
import { News } from './model/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  
  private news = inject(NewsService);
  public data: News[] = [];

  public getNews(){
    this.news.getAllNews().subscribe((resp: any) =>{
      this.data = resp.reply;
    });
  }

  ngOnInit(): void {
    this.getNews();
  }
  
}
