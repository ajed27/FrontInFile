import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../news/model/news';
import { NewsService } from '../news/service/news.service';
import { Response } from 'src/app/core';
import { RecommendService } from '../recommend';

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html'
})
export class OneNewComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private onNewService = inject(NewsService);
  private categoryChangeService = inject(RecommendService);

  public oneNew?: News | null;

  goBack(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id: number = params['id'];
      this.getNew(id);
    });
  }

  getNew(id:number){
    this.onNewService.getOneNew<News>(id).subscribe((response: Response<News>) =>{
      this.oneNew = response.data;
      this.categoryChangeService.changeIdCategory(response.data.idCategory);
    });
  }

}
