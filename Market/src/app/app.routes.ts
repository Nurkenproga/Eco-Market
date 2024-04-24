import { Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AuthComponent } from './auth/auth.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


export const routes: Routes = [
    {path : '', redirectTo : 'home', pathMatch : 'full'},
    { path: 'home', component: CategoryListComponent },
    {path : 'products', component : ProductListComponent},
    {path : 'register', component : AuthComponent},
    {path: 'shopping', component: ShoppingCartComponent},
    {path: 'products/:id', component: ProductListComponent}
];
