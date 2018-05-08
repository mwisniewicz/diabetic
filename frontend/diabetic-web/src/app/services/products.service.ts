import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getProducts(): Observable<any> {
    return this.http.get(this.baseUrl + 'products/', this.getAuthHeaders());
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(this.baseUrl + 'products/', product, this.getAuthHeaders());
  }

  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl + 'categories/', this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders(
      {'Content-Type': 'application/json; charset=utf-8',
    'Authorization': 'Token ' + token }
    );
    return { headers: httpHeaders };
  }

}
