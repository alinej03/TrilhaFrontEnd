import { TestBed } from '@angular/core/testing';

import { ValoresAprovadosService } from './valores-aprovados.service';

describe('ValoresAprovadosService', () => {
  let service: ValoresAprovadosService;

  let aprovado = {
    parcelaInicial: 1000,
    valorTotalAprovado: 100000
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValoresAprovadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar os valores aprovados', () => {
    expect(service.getDados()).toBe(service.aprovado);
  });

  it('Deve setar um novo valor', () => {
    service.setDados(aprovado);
    expect(service.aprovado).toBe(aprovado);
  });

  it('Deve limpar os valores', () => {
    service.setDados(aprovado);
  
    service.limparDados();
    expect(service.aprovado.parcelaInicial).toBe(0);
    expect(service.aprovado).not.toBe(aprovado);
  });
});
