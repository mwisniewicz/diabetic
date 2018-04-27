import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: FormGroup;
  loading: boolean;

  constructor(private fb: FormBuilder, private router: Router) {
    this.userLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    this.loading = false;
    // this.userLogin = this.fb.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  onLogin() {
    this.loading = true;
  }
}
