import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/api/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit, OnDestroy {

  signupForm: FormGroup;
  authSignupSub: Subscription;
  signupErrors: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]]
    })
  }

  ngOnDestroy() {
    if(this.authSignupSub) {
      this.authSignupSub.unsubscribe();
    }
  }

  onSubmit() {
    const data = {
      username: this.signupForm.get('username').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value,
      password2: this.signupForm.get('password2').value
    }
    this.authSignupSub = this.authService.register(data)
      .subscribe(response => {
        const token = response.token || null;
        const date = new Date(response.expires);
        this.authService.performLogin(token, date);
      }, error => {
        this.signupErrors = error['error']['detail'];
      });
  }

}
