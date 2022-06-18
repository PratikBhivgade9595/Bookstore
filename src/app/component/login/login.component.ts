import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //for routing
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserserviceService} from '../../service/userService/userservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  // users='1'
  
  constructor(private router: Router, private snackBar: MatSnackBar, private formBuilder: FormBuilder, private user: UserserviceService) {}

  ngOnInit(): void {
    // localStorage.setItem('SeesionUser',this.users)  
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      //return;
      
      let reqdata = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        
      }
      // console.log(this.loginForm.value);
      // if (this.loginForm.valid) {
      this.user.login(reqdata).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token",response.result.accessToken)
        this.router.navigateByUrl('/dashboard/getallbook')
        this.snackBar.open("Login Successfully","",{duration: 2000});
      });

    }

  }
}
