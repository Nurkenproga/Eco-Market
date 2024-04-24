import { Component, OnInit, inject } from '@angular/core';
import { Categories, Category } from '../category';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
  
})
export class CategoryListComponent implements OnInit {
  categoryService = inject(ProductsService);

    categories: Category[] = [];

  
    ngOnInit(): void {
      
      this.getCategories()
    }


    getCategories(){
      this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    }
    
}
