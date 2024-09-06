import { Component, OnInit, inject } from '@angular/core';
import { NewsService } from './service/news.service';
import { News } from './model/news';
import { Response } from 'src/app/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  
  private news = inject(NewsService);
  public data: News[] = [];

  public getNews(){
    this.news.getAllNews<News>().subscribe((response) =>{
      this.data = response.data;
    });
  }

  ngOnInit(): void {
    this.getNews();
  }
  
}
