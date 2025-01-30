import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonImg, IonLabel, IonButton } from '@ionic/angular/standalone';
import { IonicSlides } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { AvisosComponent } from "./avisos/avisos.component";
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';

register();

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonImg, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, AvisosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage implements OnInit {

  onSlideChange() {
    throw new Error('Method not implemented.');
  }

  swiperModules = [IonicSlides];

  constructor() {
    addIcons({ home });
  }

  ngOnInit() {
    console.log("")
  }

}
