import { Component, OnInit } from '@angular/core';
import { Page } from '../model';

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
        icon: 'paper',
        label: 'News',
        url: 'news'
      },
      {
        icon: 'information-circle-outline',
        label: 'Info',
        url: 'info'
      },
      {
        icon: 'time',
        label: 'Agenda',
        url: 'agenda'
      },
      {
        icon: 'pin',
        label: 'Venue',
        url: 'venue'
      },
      {
        icon: 'chatboxes',
        label: 'Contact',
        url: 'contact'
      }
    ];
  }

}
