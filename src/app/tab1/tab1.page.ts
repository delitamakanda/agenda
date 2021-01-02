import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../api/data-services/news/news-data.service';
import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  isOnline: boolean;

  constructor(private newsDataService: NewsDataService) { }

  async ngOnInit() {
    const status = await Network.getStatus();
    this.isOnline = status.connected;

    Network.addListener('networkStatusChange', (status) => {
      this.isOnline = status.connected;
    })
  }

  errorImage(evt: any) {
    evt.target.src = './assets/images/image-news.jpeg';
  }

}
