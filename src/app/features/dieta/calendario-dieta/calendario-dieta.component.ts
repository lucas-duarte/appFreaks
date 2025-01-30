import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { checkmarkCircle, checkmark, lockClosed } from 'ionicons/icons';
import { DescricaoDietaPage } from '../descricao-dieta/descricao-dieta.page';
import { DietaService } from 'src/app/core/services/dieta/dieta.service';
import { Dieta } from 'src/app/core/interfaces/dieta';
import { DietaModule } from '../dieta.module';

@Component({
  selector: 'app-calendario-dieta',
  templateUrl: './calendario-dieta.component.html',
  styleUrls: ['./calendario-dieta.component.scss'],
  standalone: true,
  imports: [DietaModule]
})
export class CalendarioDietaComponent implements OnInit {

  days = Array.from({ length: 29 }, (_, i) => i + 1); // [1, 2, 3, ..., 10]
  diaAtual = 15
  dietas: Dieta[] = []

  component = DescricaoDietaPage;

  constructor(private dietaService: DietaService) {
    addIcons({ checkmarkCircle, checkmark, lockClosed });
  }

  ngOnInit() {
    this.getDietas();
  }

  handleRefresh(event: any) {
    this.getDietas(event);
  }

  getDietas(event?: any): void {
    this.dietaService.getDieta().subscribe({
      next: (data) => {
        this.dietas = data;
        console.log(this.dietas)
        if (event) {
          setTimeout(() => {
            event.target.complete();
          }, 2000);
        }
      },
      error: (error) => {
        console.log(error)
        if (event) {
          event.target.complete();
        }
      }
    });
  }

}