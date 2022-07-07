import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/service/bookService/book.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {

  bookDetailForm!: FormGroup
  submitted = false;

visible1 = true;
visible2 = false;

  constructor(
    public dialogRef: MatDialogRef<AdminAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private bookService: BookService

  ) {}


  ngOnInit(): void {
    this.bookDetailForm = this.formBuilder.group({
      author: ['', [Validators.required]],
      bookName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price : ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
     
    });
  }


  addBook() {
    this.submitted = true;

    if (this.bookDetailForm.valid) {
      let reqData = {
        bookName: this.bookDetailForm.value.bookName,
        author: this.bookDetailForm.value.author,
        description: this.bookDetailForm.value.description,
        quantity: this.bookDetailForm.value.quantity,
        price: this.bookDetailForm.value.price,
        discountPrice: this.bookDetailForm.value.discountPrice
      }
      this.bookService.addNewBook(reqData).subscribe((response:any) => {
        console.log(response);
         
      

      })
    }
  }
}
