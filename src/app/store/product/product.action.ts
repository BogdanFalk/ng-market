import { createAction, props } from '@ngrx/store';

export const enterStorePage = createAction(
  '[Store Page] User Entered Store Page'
);
export const getProducts = createAction('[Store Page] Get All Products');
export const selectProduct = createAction(
  '[Store Page] Select Product',
  props<{ productId: string }>()
);
export const clearSelectedProduct = createAction(
  '[Store Page] Clear Selected Product'
);
