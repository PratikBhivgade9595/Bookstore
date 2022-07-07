import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/bookService/book.service';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value: any;
  count: any;
  constructor( private route: Router,private data: DataService, private book: BookService) { }

  ngOnInit(): void {
    this.getCountOFCart();
  }

  logout() {
    localStorage.removeItem('token')
    this.route.navigateByUrl('/login')
  }

  searchTitle(event: any) {
    console.log("input in search field===", event.target.value);
    this.value = event.target.value
    let Ddata = {
      type: 'search',
      data: [this.value]
    }
    this.data.changeDataMessage(Ddata)
  }

  getCountOFCart() {
    this.book.getBookFromCart().subscribe((response: any) => {
      console.log("cart items" , response);   //401 error occur logout and signin it is solved
      //this.count = response.result.length;
    })
  }
}
