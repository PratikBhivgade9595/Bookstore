import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpService: HttpserviceService) { }

  signin(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.postService('/bookstore_user/registration', reqdata, false, header)
  }
  

  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.postService('/bookstore_user/login', reqdata, false, header)
  }
}

