import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AvisosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log();
  }

}
