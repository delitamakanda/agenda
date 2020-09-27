import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-content',
  templateUrl: './custom-content.component.html',
  styleUrls: ['./custom-content.component.scss'],
})
export class CustomContentComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
