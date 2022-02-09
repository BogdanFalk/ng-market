import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({ providedIn: 'root' })
export class FakeStoreService {
  URL = environment.API_URL;

  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(`${this.URL}/products`);
  }

  getAllCategories() {
    return this.http.get(`${this.URL}/products/categories`);
  }
}
