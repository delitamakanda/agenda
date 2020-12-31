import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../api/data-services/news/news-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private newsDataService: NewsDataService) { }

  ngOnInit() { }

  errorImage(evt: any) {
    evt.target.src = './assets/images/image-news.jpeg';
  }

}
