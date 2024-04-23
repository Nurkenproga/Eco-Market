import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';


export const routes: Routes = [
    { path: 'home', component: CategoryListComponent },
    {path : 'products', component : ProductListComponent},
];
