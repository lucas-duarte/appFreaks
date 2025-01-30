import { Component } from '@angular/core';
import { IonNav, IonButton, IonCol, IonModal } from '@ionic/angular/standalone';
import { DescricaoDietaPage } from './descricao-dieta/descricao-dieta.page';
import { CalendarioDietaComponent } from './calendario-dieta/calendario-dieta.component';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
  standalone: true,
  imports: [IonModal, IonCol, IonButton, IonNav]
})
export class DietaPage {
  component = CalendarioDietaComponent;
}
