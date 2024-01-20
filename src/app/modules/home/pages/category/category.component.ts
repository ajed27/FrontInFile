import { Component, OnInit, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CategoryService } from './service';
import { Category } from './model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit{

  private categories = inject(CategoryService);

  public columns: tableData[] = [
    {
      id: 'idCategory',
      column: 'ID'
    },
    {
      id: 'category',
      column: 'Categoria'
    }
  ]

  displayedColumns: string[] = ['idCategory', 'category'];
  dataSource: MatTableDataSource<Category>;

  constructor(){
    this.dataSource = new MatTableDataSource();
  }

  public getCategories(){
    this.categories.getCategories().subscribe((resp: any) => {
      this.dataSource = new MatTableDataSource<Category>(resp.reply);
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

}

interface tableData{
  id: string;
  column: string;
}
