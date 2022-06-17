import { TestBed } from '@angular/core/testing';
import { imovel } from 'src/app/componentes/model/dados.model';

import { DadosImovelService } from './dados-imovel.service';

describe('DadosImovelService', () => {
  let service: DadosImovelService;

  let imovel: imovel = {
    id: 0,
    seletor: '',
    rendaMensal: 1000,
    valorImovel: 100000,
    valorEntrada: 10000,
    parcelas: 36,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosImovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar os valores aprovados', () => {
    expect(service.getImovel()).toBe(service.imovel);
  });

  it('Deve setar um novo valor', () => {
    service.setImovel(imovel);
    expect(service.imovel).toBe(imovel);
  });

  it('Deve limpar os valores', () => {
    service.setImovel(imovel);
  
    service.limparDados();
    expect(service.imovel.rendaMensal).toBe(null);
    expect(service.imovel).not.toBe(imovel);
  });
});
