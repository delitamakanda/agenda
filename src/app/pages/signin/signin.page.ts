import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../api/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit, OnDestroy {

  loginForm: FormGroup;
  authLoginSub: Subscription;
  loginErrors: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnDestroy() {
    if(this.authLoginSub) {
      this.authLoginSub.unsubscribe();
    }
  }

  onSubmit() {
    const data = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }
    this.authLoginSub = this.authService.login(data.username, data.password)
      .subscribe(response => {
        const token = response.token || null;
        const date = new Date(response.expires)
        this.authService.performLogin(token, date);
      }, error => {
        this.loginErrors = error['error']['detail'];
      });
  }

}
