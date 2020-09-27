import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CustomHeaderComponent } from '../custom-header/custom-header.component';

@Component({
  selector: 'app-custom-back-header',
  templateUrl: './custom-back-header.component.html',
  styleUrls: ['./custom-back-header.component.scss'],
})
export class CustomBackHeaderComponent extends CustomHeaderComponent implements OnInit {

  constructor(popoverController: PopoverController) {
    super(popoverController);
  }

  ngOnInit() {}

}
