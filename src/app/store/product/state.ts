import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import * as fromProduct from './product.reducer';

export const FEATURE_KEY = 'products';

export interface State {
  products: fromProduct.State;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProduct.reducer,
};

@NgModule({
  imports: [StoreModule.forFeature(FEATURE_KEY, reducers)],
})
export class ProductsModule {}
