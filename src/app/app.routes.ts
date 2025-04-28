import { Routes } from '@angular/router';
import { authGuard } from './core/services/auth.guard';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
	},
	{
		path: 'admin',
		canActivate: [authGuard],
		children: [
			  {
					path: 'stock', 
					children: [
						{
							path: '',
							loadComponent: () => import('./stock/stock.component').then(m => m.StockComponent),
						},
						{
							path: ':id',
							loadComponent: () => import('./product/product.component').then(m => m.ProductComponent)
						}
					]	
				},
				{
					path: 'basket', 
					loadComponent: () => import('./basket/basket.component').then(m => m.BasketComponent),
				}
		]
	},
  {
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
];
