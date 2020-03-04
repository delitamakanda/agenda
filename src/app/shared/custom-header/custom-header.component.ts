import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from 'src/app/pages/language-popover/language-popover.page';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})
export class CustomHeaderComponent implements OnInit {

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  async openLanguagePopover(evt: any) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: evt
    });
    await popover.present();
  }

}
