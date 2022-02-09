import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FakeStoreService } from 'src/app/core/api/fakeStore.service';
import { FilterType } from 'src/app/shared/models/filterTypes';
import { Product } from 'src/app/shared/models/product';
import { ProductActions } from '../../store/actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  constructor(
    private fakeStoreService: FakeStoreService,
    private store: Store
  ) {}

  public filters = FilterType;
  public products: Product[] = [];

  ngOnInit(): void {
    this.store.dispatch(ProductActions.enterStorePage());

    this.fakeStoreService.getAllProducts().subscribe((response) => {
      this.products = <Product[]>response;
      // this.products = this.products.filter((product) => {
      //   return product.category ===
      // });
      console.log(this.products);
    });
  }
}
