import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  value: any;
  constructor(private book: BookService) { }

  ngOnInit(): void {
    this.getBookView();
  }

  getBookView() {
    this.book.getBookAll().subscribe((response: any)=> {
      console.log("view of Book", response);
    })
  }
}
