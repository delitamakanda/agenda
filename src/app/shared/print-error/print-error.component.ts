import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-print-error',
  templateUrl: './print-error.component.html',
  styleUrls: ['./print-error.component.scss'],
})
export class PrintErrorComponent implements OnInit {

  @Input() control: FormControl;
  @Input() type: string;

  VALIDATION_MESSAGES = {
    username: [
      { type: 'required', message: 'Ce champs est requis.' },
    ],
    password: [
      { type: 'required', message: 'Ce champs est requis.' },
      { type: 'pattern', message: 'Le champs doit contenir au moins 8 caractères.' },
    ]
  };

  constructor() { }

  ngOnInit() {}

}
