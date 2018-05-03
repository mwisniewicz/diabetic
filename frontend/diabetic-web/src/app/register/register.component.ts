import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  userRegister: FormGroup;
  loading: boolean;
   
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private global: GlobalService) { 
    this.userRegister = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.loading = false;
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onRegister() {
    this.loading = true;
    this.userService.registerUser(this.userRegister.value).subscribe(
      response => {
        this.loading = false;
        console.log("registered ", response);
        this.router.navigate(['/login']);
      },
      error => {
        this.loading = false;
        console.log('error', error);
      }
    );

  }


}
