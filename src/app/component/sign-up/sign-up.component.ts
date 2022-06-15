import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserserviceService} from '../../service/userService/userservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signinForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private user: UserserviceService ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required],
    });
  
  }

  get f() { return this.signinForm.controls; }


  onSubmit(){
    this.submitted = true;

    if (this.signinForm.valid) {
      //return;
      let reqdata = {
        fullName: this.signinForm.value.fullName,
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
        phone: this.signinForm.value.mobileNumber,
        
      }
      this.user.signin(reqdata).subscribe((response: any) => {
        console.log(response);
      });

  }
}
}
