import { Routes } from '@angular/router';

export const routes: Routes = [
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
  },
  {
    path: '', 
    redirectTo: '/stock', 
    pathMatch: 'full'
  },
];
