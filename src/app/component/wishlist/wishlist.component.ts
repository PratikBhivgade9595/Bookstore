import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  count: any;
  bookList: any;
  constructor(private book: BookService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWishlistBooks();
  }

  getWishlistBooks() {
    this.book.getBookFromWishlist().subscribe((response: any) => {
      console.log("Get From Wishlist", response)
      this.bookList = response.result;
      this.count = response.result.length;

    });
  }

  removeBookFromWishlist(book: any) {
    this.book.removeBookFromWishlist(book.product_id._id).subscribe((response: any) => {
      console.log("remove from cart", response)
      this.ngOnInit();
      this.snackBar.open("Book is removed", "", { duration: 2000 });
    });
  }

}
