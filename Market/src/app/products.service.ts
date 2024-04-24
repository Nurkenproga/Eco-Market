import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OrderItem, Product} from './product';
import { Categories, Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  BASE_URL='http://127.0.0.1:8000';

  constructor(private http:HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/api/product-category/`)
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/product-list/`)
  }

  getOrderItems(): Observable<OrderItem[]>{
    return this.http.get<OrderItem[]>(`${this.BASE_URL}/api/order-item/`)
  }

  getProductsId(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/product/${id}`)
  }
}
