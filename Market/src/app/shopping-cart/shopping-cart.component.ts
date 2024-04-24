import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../product';
import {Product, Products} from '../product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import {ProductsService} from '../products.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit{
  orderItemService = inject(ProductsService);


  products: Product[] = [];

  quantity: number = 1;

  orderItems: OrderItem[] = [];

  constructor(){}

  ngOnInit() {
    // this.getProducts();
    // this.getOrderItems();

    
  }

  decreaseQuantity(id: number){
    this.quantity -= 1;
    console.log("TESTING" + this.quantity)
  }
  increaseQuantity(id: number){
    this.quantity += 1;
  }

  getOrderItems(){
    this.orderItemService.getOrderItems().subscribe(orderItems => {
      this.orderItems = orderItems;
    });
  }

  getProducts(){
    this.orderItemService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  
}
