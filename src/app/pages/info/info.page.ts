import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-info-page',
  templateUrl: 'info.page.html',
  styleUrls: ['info.page.scss']
})
export class InfoPage {

  @Input() description: string;

  constructor(private modalCtrl: ModalController) {}


  async closeModal() {
    await this.modalCtrl.dismiss(null);
  }

}
