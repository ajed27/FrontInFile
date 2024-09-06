import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent, FooterComponent } from './shared';
import { CategoryComponent, NewsComponent, LayoutComponent, OneNewComponent, RecommendComponent } from './pages';


@NgModule({
  declarations: [
    NewsComponent,
    OneNewComponent,
    LayoutComponent,
    CategoryComponent,
    NavbarComponent,
    FooterComponent,
    RecommendComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
