import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  ngOnInit(): void { }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.maxLength(200), Validators.minLength(3)]],
      email: [''],
      password: ['', [Validators.minLength(6)]],
      confPassword: ['']
    }, { validator: this.passwordCheck })
  }
  passwordCheck(control: AbstractControl) {
    const password = control.get('password');
    const confPassword = control.get('confPassword');
    if (password && confPassword && password.value !== confPassword.value) {
      return { misMatch: true }
    } else {
      return null;
    }
  }

  signup() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).then(
        res => {
          console.log(res);
          alert('Successful registration');
        }
      )
      this.signupForm.reset();
    }
  }
}
