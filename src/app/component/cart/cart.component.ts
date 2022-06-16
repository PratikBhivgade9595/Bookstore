import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bookList: any;
  constructor(private book : BookService) { }

  ngOnInit(): void {
    this.getCartBooks();
  }

  getCartBooks() {
    this.book.getBookFromCart().subscribe((response : any) => {
      console.log("Get From Cart", response)
      this.bookList = response.result;
    });
  }

  removeBookFromCart(book: any) {
    this.book.removeBook(book._id).subscribe((response : any) => {
      console.log("remove from cart", response)
      this.ngOnInit();
    });
  }
}
