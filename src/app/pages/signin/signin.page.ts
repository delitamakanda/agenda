import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../api/auth/auth.service';
import { LoadingController } from '@ionic/angular';
import { InfoPage } from '../info/info.page';
import { ModalService } from '../../shared/modal/modal.service';

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
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2)]],
    })
  }

  ngOnDestroy() {
    if (this.authLoginSub) {
      this.authLoginSub.unsubscribe();
    }
  }

  async onSubmit() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
      message: 'Loading'
    });

    await loading.present();

    const data = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }
    this.authLoginSub = this.authService.login(data.username, data.password)
      .subscribe(response => {
        const token = response.token || null;
        const date = new Date(response.expires)
        this.authService.performLogin(token, date);
        loading.dismiss();
      }, error => {
        this.loginErrors = error['error']['detail'];
        loading.dismiss();
      });
  }

  async openInfoPageModal() {
    const modal = await this.modalService.openModal({
      component: InfoPage,
      componentProps: {
        description : "Login in with username: user and password: ionic"
      }
    });

    modal.onDidDismiss()
      .then( async (result) => {
        console.log('close modal');
      });
  }

}
