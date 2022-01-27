import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.email,
    ]),
    password: new FormControl('', [Validators.minLength(4)]),
  });

  constructor(private router: Router) {}
  

  ngOnInit(): void {}

  login() {
    let loginEmail = this.loginForm.get('email')?.value;
    let loginPassword = this.loginForm.get('password')?.value;
    let registerEmail = localStorage.getItem('registerEmail');
    let registerPassword = localStorage.getItem('registerPassword');
    if (loginEmail == registerEmail && loginPassword == registerPassword) {
      localStorage.setItem('isLogged', 'true');
      this.router.navigate(['sample']);
    } else {
      localStorage.setItem('isLogged', 'false');
      alert('please enter valid credentials!!');
    }
  }
}
