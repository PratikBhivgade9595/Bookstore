import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  bookList: any;

  constructor(private book: BookService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllBooks();
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
    this.snackBar.open("Book is added to cart","",{duration: 2000});
  });
}

}
