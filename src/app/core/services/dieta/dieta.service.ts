import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dieta } from '../../interfaces/dieta';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

  constructor() { }

  getDieta(): Observable<Dieta[]> {
    var dietas = [];
    var diaAtual = 15

    for (let index = 1; index < 30; index++) {
  
      dietas.push(
        {
          "dia": index,
          "exercicio": "20 min de aeróbico",
          "status": ((index < diaAtual) ? "concluido" : (index == diaAtual) ? "atual" : (index <= diaAtual + 5) ? "preview" : "bloqueado"),
          "refeicoes": [
            { "refeicao": 1, "descricao": "4 claras e 2 ovos inteiros ou 50g de albumina" },
            { "refeicao": 2, "descricao": "200g de arroz ou mandioca, 150g de frango, carne ou peixe" },
            { "refeicao": 3, "descricao": "200g de arroz ou mandioca, 150g de frango, carne ou peixe" },
            { "refeicao": 4, "descricao": "200g de arroz ou mandioca, 150g de frango, carne ou peixe" },
            { "refeicao": 5, "descricao": "200g de arroz ou mandioca, 150g de frango, carne ou peixe" },
            { "refeicao": 6, "descricao": "4 claras e 2 ovos inteiros ou 50g de albumina" }
          ]
        },
      )
    }
    return of(dietas);
  }
}
