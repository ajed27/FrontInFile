import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { OneNewComponent } from './pages/one-new/one-new.component';
import { FooterComponent, NavbarComponent } from 'src/app/core';
import { LayoutComponent } from './pages/layout/layout.component';


@NgModule({
  declarations: [
    NewsComponent,
    OneNewComponent,
    FooterComponent,
    NavbarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
