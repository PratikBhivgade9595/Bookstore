import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/bookService/book.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminAddComponent } from '../admin-add/admin-add.component';
import { AdminUpdateComponent } from '../admin-update/admin-update.component';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  bookList: any;
  

  constructor(private book: BookService, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllBooks(); 
  }


  getAllBooks() {
    this.book.getBookAll().subscribe((response: any) => {
      console.log("Get all books successful", response.result);
      this.bookList = response.result;
      this.bookList.reverse();
      

    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdminAddComponent, {
      width: "300px",
      height: "400px",
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


  openDialog1(): void {
    const dialogRef = this.dialog.open(AdminUpdateComponent, {
      width: "300px",
      height: "400px",
     
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}
