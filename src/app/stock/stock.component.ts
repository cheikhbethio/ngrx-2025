import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { selectAllProducts } from '../store/selectors/product.selectors';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../types';
import { BasketActions } from '../store/actions/basket.actions';
import { ProductActions } from '../store/actions/product.actions';
@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {
	store = inject(Store<AppState>);
	products$ = this.store.select(selectAllProducts);

	productForm = new FormGroup({
		name: new FormControl('', Validators.required),
		price: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
	});

	addProduct() {
		if (this.productForm.valid) {
			const productWithId: Product = {
				name: this.productForm.value.name || '',
				price: this.productForm.value.price ?? 0,
				id: Date.now()
			};
			this.store.dispatch(ProductActions.addProduct({ product: productWithId }));
			this.productForm.reset();
		}
	}

	deleteProduct(id: number) {
		console.log('Deleting product with id:', id);
		this.store.dispatch(ProductActions.removeProduct({ productId: id }));
	}

	editProduct(product: Product) {
		this.store.dispatch(ProductActions.updateProduct({ product }));
	}

	addToBasket(product: Product) {
		this.store.dispatch(BasketActions.addToBasket({ product }));
	}
}
