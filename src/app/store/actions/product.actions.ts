import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Product } from '../../types';

export const ProductActions = createActionGroup({
  source: 'Product API', // Descriptive source for the actions
  events: {
    // Product List Actions
    'Load Products': emptyProps(),
    'Load Products Success': props<{ products: Product[] }>(),
    'Load Products Failure': props<{ error: any }>(),    

    // Single Product Actions
    'Load Product By Id': props<{ productId: number }>(),
    'Load Product By Id Success': props<{ product: Product }>(),
    'Load Product By Id Failure': props<{ error: any }>(),    

    'Add Product': props<{ product: Product }>(),
    'Add Product Success': props<{ product: Product }>(),
    'Add Product Failure': props<{ error: any }>(),    

    'Remove Product': props<{ productId: number }>(),
    'Remove Product Success': props<{ productId: number }>(),
    'Remove Product Failure': props<{ error: any }>(),    

    'Update Product': props<{ product: Product }>(),
    'Update Product Success': props<{ product: Product }>(),
    'Update Product Failure': props<{ error: any }>(),    
   }
}); 