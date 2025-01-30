import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonImg } from '@ionic/angular/standalone';
import { Desafio } from 'src/app/core/interfaces/desafio';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.page.html',
  styleUrls: ['./desafio.page.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DesafioPage implements OnInit {

  desafios: Desafio[] = [
    { 
      titulo: "Shape de Urgência",
      descricao: "",
      img: "../../../assets/img/treino3.webp",
      status: "" }
    ];

  constructor() { }

  ngOnInit() {
    console.log()
  }

}
