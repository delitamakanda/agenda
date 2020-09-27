import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  @ViewChild('welcomeSlider', { static: false }) slides: IonSlides;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  async dismiss() {
    localStorage.setItem('welcomeComplete', 'true');
    this.router.navigateByUrl('/');
  }

}
