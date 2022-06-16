import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  bookList: any;

  constructor(private book: BookService) { }

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
  });
}

}
