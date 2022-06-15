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
      console.log("Get all books successful", response.data);
      this.bookList = response.data;
    });
  }
}
