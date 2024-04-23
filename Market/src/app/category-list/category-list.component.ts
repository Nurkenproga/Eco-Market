import { Component } from '@angular/core';
import { Categories } from '../category';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
  
})
export class CategoryListComponent {

    categories = Categories;
}
