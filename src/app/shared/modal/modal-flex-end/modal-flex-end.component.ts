import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-flex-end',
  templateUrl: './modal-flex-end.component.html',
  styleUrls: ['./modal-flex-end.component.scss'],
})
export class ModalFlexEndComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }

}
