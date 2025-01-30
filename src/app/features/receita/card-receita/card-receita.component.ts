import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-card-receita',
  templateUrl: './card-receita.component.html',
  styleUrls: ['./card-receita.component.scss'],
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader],
  standalone: true
})
export class CardReceitaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
