import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { FormGroup } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bookList: any;
  // bookLists: any;
  count: any;
  panelOpenState = false;
  visible = false;
  seen = true;
  continue = true;
  bookVisible = false;
  orderList: any;
  orders: any = [];

  addressDetails!: FormGroup;
  submitted = false;

  constructor(private book: BookService, private snackBar: MatSnackBar, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.getCartBooks();

    this.addressDetails = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    });


  }

  get f() { return this.addressDetails.controls; }

  orderAddress() {
    this.continue = false;
    this.bookVisible = true;

    this.submitted = true;

    if (this.addressDetails.valid) {
      //return;

      let reqdata = {
        addressType: "Home",
        fullAddress: this.addressDetails.value.address,
        city: this.addressDetails.value.city,
        state: this.addressDetails.value.state,
      }
      this.book.orderDetails(reqdata).subscribe((response: any) => {
        console.log(response);
      });



    }
  }

  getCartBooks() {
    this.book.getBookFromCart().subscribe((response: any) => {
      console.log("Get From Cart", response)
      this.bookList = response.result;
      this.count = response.result.length;

    });
  }

  removeBookFromCart(book: any) {
    this.book.removeBook(book._id).subscribe((response: any) => {
      console.log("remove from cart", response)
      this.ngOnInit();
      this.snackBar.open("Book is removed", "", { duration: 2000 });
    });
  }

  placeOrderClick() {
    this.visible = true;
    this.seen = false;
  }



  checkout() {
    this.orders.forEach((response: any) => {
      this.orders.push({
        "product_id": response.product_id._id,
        "product_name": response.product_id.bookName,
        "product_quantity": response.product_id.quantity,
        "product_price": response.product_id.price
      });
    });
    console.log(this.orders);
    
    let reqdata ={
      "place": this.orders
    }
    console.log(reqdata)

    this.book.orderSummary(reqdata).subscribe((response: any) =>{
      console.log(response);

    })

    this.route.navigateByUrl('/dashboard/order');
    this.snackBar.open("Order Is Placed", "", { duration: 2000 });
  }
}

