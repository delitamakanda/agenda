import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  async openModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create({
      component: opts.component,
      cssClass: 'modal-flex-end',
      ...opts
    });

    modal.present();
    return modal;
  }
}
