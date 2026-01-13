import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.BASE_URL}/api/products/${id}`
    );
  }
}
