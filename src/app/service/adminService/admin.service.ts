import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService: HttpserviceService) { }

  adminSignIn(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.postService('/bookstore_user/admin/registration', reqdata, false, header)
  }

  adminLoginIn(reqdata: any){
  console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.postService('/bookstore_user/admin/login', reqdata, false, header)
  }
}
