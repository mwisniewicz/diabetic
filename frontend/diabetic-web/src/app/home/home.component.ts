import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Subscription } from 'rxjs/Subscription';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductsService]
})
export class HomeComponent implements OnInit {

  account: User = new User();
  userSub: Subscription;
  constructor(private global: GlobalService, private router: Router, private productsService: ProductsService) { }

  ngOnInit() {

    this.userSub = this.global.user.subscribe(
      me => this.account = me
    );

    if ( localStorage.getItem('token') && localStorage.getItem('account') ) {
      this.global.me = JSON.parse(localStorage.getItem('account'));
      this.getProducts();
    } else {
      this.router.navigate(['/login']);
    }

  }

  getProducts() {
    this.productsService.getProducts().subscribe(
        products => {
          console.log('products', products);
        },
        error => {
          console.log('error', error);
        }
    );
  }

}
