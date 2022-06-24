import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  value: any;
  feedback: any;
  bookId: any;
  Book: any;
  feedbackArray: any;
  constructor(private book: BookService) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookId")  //from getallbook we get id
    console.log(this.bookId)
    this.getBookView();
    this.getFeedback();
  }

  getBookView() {
    this.book.getBookAll().subscribe((response: any)=> {
      console.log("view of Book", response);
      response.result.forEach((element: any) => {
        if (element._id == this.bookId) {
          this.Book = element;
        }
      });
    })
  }

  feedbackSubmit() {

    let req = {
      comment: this.feedback,
      rating: this.value
    }

    this.book.feedback( this.bookId, req).subscribe((response: any) =>{
      console.log("feedback added", response);
      
    })
    // this.ngOnInit();
  }

  getFeedback() {
    this.book.getFeedback(this.bookId).subscribe((response: any) => {
      console.log("get feedback", response);
      this.feedbackArray = response.result;
    })
  }
}
