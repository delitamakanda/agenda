import { Component, OnInit } from '@angular/core';
import { Page } from '../core/model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  pages: Page[] = [];

  constructor() { }

  ngOnInit() {
    /**
     * Followning is the way you write documentation
     * @param pages Tabs of the app
     * @returns It returns an Array of objects
    */
    this.pages = [
      {
        icon: 'newspaper-outline',
        label: 'News',
        url: 'tab1'
      },
      {
        icon: 'calendar-outline',
        label: 'Agenda',
        url: 'tab2'
      },
      {
        icon: 'location-outline',
        label: 'Venue',
        url: 'tab3'
      }
    ];
  }

}
