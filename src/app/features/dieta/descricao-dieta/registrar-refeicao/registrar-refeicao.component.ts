import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DietaModule } from '../../dieta.module';
import { IonItem, IonModal, IonList, IonCheckbox, IonNote } from "@ionic/angular/standalone";
import { CheckboxCustomEvent, OverlayEventDetail } from '@ionic/core/components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrar-refeicao',
  templateUrl: './registrar-refeicao.component.html',
  styleUrls: ['./registrar-refeicao.component.scss'],
  standalone: true,
  imports: [IonNote, IonCheckbox, IonList, IonModal, IonItem, DietaModule]
})
export class RegistrarRefeicaoComponent  implements OnInit {
    
  @Input() modal!: IonModal;
  @Output() dismissChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  checkboxChanged(event: any) {
    const ev = event as CheckboxCustomEvent;
    const checked = ev.detail.checked;

    this.dismissChange.emit(checked);
  }
}
