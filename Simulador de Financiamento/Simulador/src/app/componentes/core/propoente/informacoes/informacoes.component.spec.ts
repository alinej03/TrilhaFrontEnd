import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { DadosProponenteService } from 'src/app/service/dadosProponente/dados-proponente.service';

import { InformacoesComponent } from './informacoes.component';

describe('InformacoesComponent', () => {
  let component: InformacoesComponent;
  let fixture: ComponentFixture<InformacoesComponent>;
  let service: DadosProponenteService;
  let dadosImovelService: DadosImovelService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(DadosProponenteService);
    dadosImovelService = TestBed.inject(DadosImovelService);
    fixture = TestBed.createComponent(InformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve salvar os dados', () => {
    spyOn(service, 'setProponente');
    component.salvarDados();
    expect(service.setProponente).toHaveBeenCalled();
  });

  it('Deve limpar os valores', () => { 
    spyOn(service, 'limparDados');
    spyOn(dadosImovelService, 'limparDados');

    component.limparDados();

    expect(service.limparDados).toHaveBeenCalled();
    expect(dadosImovelService.limparDados).toHaveBeenCalled();
  });

  it('Deve setar true na maioridade', () => { 
    component.validacaoData({value: '02/02/2000'});
    expect(component.maiorIdade).toBe(true);
  });

  it('Deve setar false na maioridade', () => { 
    component.validacaoData({value: '02/02/2010'});
    expect(component.maiorIdade).toBe(false);
  });
});
