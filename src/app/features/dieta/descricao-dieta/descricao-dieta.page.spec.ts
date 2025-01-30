import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescricaoDietaPage } from './descricao-dieta.page';

describe('DescricaoDietaPage', () => {
  let component: DescricaoDietaPage;
  let fixture: ComponentFixture<DescricaoDietaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoDietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
