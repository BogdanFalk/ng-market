import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/shared/models/product';
import { ProductActions } from '../actions';

export interface State {
  collection: Product[];
  selectedProductId: string | null;
}

export const initialState: State = {
  collection: [],
  selectedProductId: null,
};

export const reducer = createReducer(
  initialState,
  on(
    ProductActions.clearSelectedProduct,
    ProductActions.enterStorePage,
    (state) => {
      return {
        ...state,
        selectedProductId: null,
      };
    }
  ),
  on(ProductActions.selectProduct, (state, action) => {
    return {
      ...state,
      selectedProductId: action.productId,
    };
  })
);
