import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { CardReceitaComponent } from './card-receita/card-receita.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CardReceitaComponent, IonRefresher, IonRefresherContent]
})
export class ReceitaPage implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
  console.log("")
  }

 
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

}
