import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];  
  filteredProducts: Product[] = []; // Create a separate array for filtered products
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.productService.getProductsId(id).subscribe(products => {
          this.products = products;
          this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
        });
      }
      else{
        this.productService.getProducts().subscribe(products => {
          this.products = products;
          this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
        });
      }
    });
  }

  // Function to filter products based on search term
  searchProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}