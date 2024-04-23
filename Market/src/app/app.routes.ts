import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthComponent } from './auth/auth.component';


export const routes: Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    { path: 'home', component: CategoryListComponent },
    {path : 'products', component : ProductListComponent},
    {path : 'register', component : AuthComponent},
];
