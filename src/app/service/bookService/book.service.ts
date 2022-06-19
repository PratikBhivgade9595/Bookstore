import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpService: HttpserviceService) {
    this.token = localStorage.getItem("token")
  }

  getBookAll() {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/bookstore_user/get/book', true, header)
  }

  toCartAdded(product_id: any) {
    console.log("product_id", product_id);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/bookstore_user/add_cart_item/' + product_id, {}, true, header)
  }

  getBookFromCart() {

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('/bookstore_user/get_cart_items', true, header)
  }


  removeBook(product_id: any) {
    console.log("product_id", product_id);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService('/bookstore_user/remove_cart_item/' + product_id, true, header)
  }

  orderDetails(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.putService('/bookstore_user/edit_user', reqdata, true, header)
  }

  toWishlistAdded(product_id: any) {
    console.log("product_id", product_id);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('/bookstore_user/add_wish_list/' + product_id, {}, true, header)

  }

  getBookFromWishlist() {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService('/bookstore_user/get_wishlist_items', true, header)
  }

  removeBookFromWishlist(product_id: any) {
    console.log("product_id", product_id);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService('/bookstore_user/remove_wishlist_item/' + product_id, true, header)
  }
}


