import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.email,
    ]),
    password: new FormControl('', [Validators.minLength(4)]),
  });

  constructor() {}

  ngOnInit(): void {}



  register() {
    localStorage.setItem(
      'registerEmail',
      this.registerForm.get('email')?.value
    );
    localStorage.setItem(
      'registerPassword',
      this.registerForm.get('password')?.value
    );
    alert('Registration Succesfull!!');
  }
}
