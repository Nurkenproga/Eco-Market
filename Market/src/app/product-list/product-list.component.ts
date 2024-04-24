import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {
  products: Product[] = [];  
  productService = inject(ProductsService);
  
  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      if(params.get('id')){
        const id = Number(params.get('id'));
        this.productService.getProductsId(id).subscribe(products => {
          this.products = products;
        });
      }
      else{
        this.productService.getProducts().subscribe(products => {
          this.products = products;
        });
      }
    });
  }
    

  getProducts(){
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
}
