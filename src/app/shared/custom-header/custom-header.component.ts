import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../../pages/language-popover/language-popover.page';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  public async openLanguagePopover(evt: any) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: evt
    });
    await popover.present();
  }

}
