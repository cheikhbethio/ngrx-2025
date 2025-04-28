import { createActionGroup, props } from '@ngrx/store';
import { Product } from '../../types';

export const BasketActions = createActionGroup({
    source: 'Basket', // Descriptive source
    events: {
        'Add To Basket': props<{ product: Product }>(),
        'Remove From Basket': props<{ product: Product }>(), 
    }
}); 