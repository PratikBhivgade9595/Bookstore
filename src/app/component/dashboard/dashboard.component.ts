import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  value: any;
  constructor( private route: Router,private data: DataService) { }

  ngOnInit(): void {
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
}
