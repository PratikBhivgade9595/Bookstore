import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.scss']
})
export class OrderPlaceComponent implements OnInit {

  constructor(private route: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  home() {
    this.route.navigateByUrl('/dashboard/getallbook');
    this.snackBar.open("Back To Home Page","",{duration: 2000});
  }
}
