import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs/Subscription';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsService]
})
export class HomeComponent implements OnInit {

  account: User = new User();
  userSub: Subscription;
  products;
  categories;
  selectedProduct: Product;
  productInput: FormGroup;
  isAddEditMode: boolean;
  loading: boolean;

  constructor(private global: GlobalService, private router: Router, private productsService: ProductsService, private fb: FormBuilder) { }

  ngOnInit() {

    this.loading = false;

    this.userSub = this.global.user.subscribe(
      me => this.account = me
    );

    if ( localStorage.getItem('token') && localStorage.getItem('account') ) {
      this.global.me = JSON.parse(localStorage.getItem('account'));
      this.getProducts();
      this.getCategories();
    } else {
      this.router.navigate(['/login']);
    }

    this.isAddEditMode = false;
    this.productInput = this.fb.group({
      name: ['', Validators.required],
      category: this.fb.group({
        name: ['',Validators.required],
      }),
      tag: this.fb.array([this.createTag()])
    })
  }

  createTag(): FormGroup{
    return this.fb.group({
      name: ['',Validators.required]
    });
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
        response => {
          this.products = response;
        },
        error => {
          console.log('error', error);
        }
    );
  }

  getCategories() {
    this.productsService.getCategories().subscribe(
        response => {
          this.categories = response;
        },
        error => {
          console.log('error', error);
        }
    );
  }

  private doLogout() {
    this.global.me = new User();
    localStorage.removeItem('token');
    localStorage.removeItem('account');
    this.router.navigate(['/login']);
  }

  productClicked(product) {
    this.selectedProduct = product;
    this.isAddEditMode = true;
  }

  addProduct() {
    this.selectedProduct = null;
  }

  submitProduct () {
    this.productsService.addProduct(this.productInput.value).subscribe(
      response => {
        console.log('response', response);
        //this.products.push(response);
      },
      error => {
        console.log('error', error);
      }
  );
  }

}
