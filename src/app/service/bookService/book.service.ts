import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpserviceService) { }

  getBookAll() {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.getService('/bookstore_user/get/book', true, header)
  }
}

