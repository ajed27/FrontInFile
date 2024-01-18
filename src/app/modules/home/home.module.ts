import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { OneNewComponent } from './pages/one-new/one-new.component';


@NgModule({
  declarations: [
    NewsComponent,
    OneNewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
