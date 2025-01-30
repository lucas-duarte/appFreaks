import { Component, Input, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCardContent, IonRow, IonGrid, IonCol, IonButton, IonChip, IonText, IonIcon, IonNavLink, IonNav, IonButtons, IonBackButton, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle, checkmark } from 'ionicons/icons';
import { CardReceitaComponent } from '../../receita/card-receita/card-receita.component';
import { Dieta } from 'src/app/core/interfaces/dieta';
import { DietaModule } from '../dieta.module';
import { NavParams } from '@ionic/angular'
import { ActionSheetController } from '@ionic/angular';
import { RegistrarRefeicaoComponent } from "./registrar-refeicao/registrar-refeicao.component";


@Component({
  selector: 'app-descricao-dieta',
  templateUrl: './descricao-dieta.page.html',
  styleUrls: ['./descricao-dieta.page.scss'],
  standalone: true,
  imports: [IonModal, DietaModule, RegistrarRefeicaoComponent]
})
export class DescricaoDietaPage implements OnInit {

  dieta!: Dieta;  

  constructor(private navParams: NavParams, private actionSheetCtrl: ActionSheetController) {
    addIcons({ checkmarkCircle, checkmark });
  }

  ngOnInit(): void {
    this.dieta = this.navParams.data as Dieta;
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
