import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/service/dataService/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  bookList: any = [];
  visible1 = true
  visible2 = false
  p: number = 1;
  message: any;
  searchWord: any;
  subscription: any;

  constructor(private book: BookService, private snackBar: MatSnackBar, private data: DataService, private route: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.subscription = this.data.currentData.subscribe(message => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord = message.data[0]
      // this.getAllNotes();
    })
  }

  getAllBooks() {
    this.book.getBookAll().subscribe((response: any) => {
      console.log("Get all books successful", response.result);
      this.bookList = response.result;
    });
  }

  addToCart(book: any) {
    this.book.toCartAdded(book._id).subscribe((response: any) => {  
      console.log("Added To Cart", response);
      this.snackBar.open("Book is added to cart", "", { duration: 2000 });
      
    });
    this.visible1 = false;
    this.visible2 = true;
    
  }

  addToWishlist(book: any) {
    this.book.toWishlistAdded(book._id).subscribe((response: any) => {
      console.log("Added To Wishlist", response);
      this.snackBar.open("Book is added to wishList", "", { duration: 2000 });
    });
  }

  lowToHigh() {
    this.bookList.sort((low: any, high: any) => low.price - high.price);
  }

  highToLow() {
    this.bookList.sort((low: any, high: any) => high.price - low.price);
  }

  newestArrivals() {
    this.bookList.reverse();

  }

  quickView(book: any) {
    localStorage.setItem("bookId",book._id);
    this.route.navigateByUrl('/dashboard/view')
  }
}
