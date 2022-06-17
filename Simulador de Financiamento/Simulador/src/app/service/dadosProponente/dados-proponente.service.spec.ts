import { TestBed } from '@angular/core/testing';

import { DadosProponenteService } from './dados-proponente.service';

describe('DadosProponenteService', () => {
  let service: DadosProponenteService;

  let prop = {
    id: 0,
    nomeCompleto: 'Teste Unitario',
    profissao: 'Desenvolvedor',
    cpf: '00011122233',
    email: 'teste@teste.com',
    dataNascimento: '02/02/2022',
    cep: '09380589',
    celular: '11958908560'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosProponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar os dados do Proponente', () => {
    expect(service.getProponente()).toBe(service.proponente);
  });

  it('Deve setar um novo Proponente', () => {
    service.setProponente(prop);
    expect(service.proponente).toBe(prop);
  });

  it('Deve limpar os dados do Proponente', () => {
    service.setProponente(prop);
  
    service.limparDados();
    expect(service.proponente.nomeCompleto).toBe("");
    expect(service.proponente).not.toBe(prop);
  });
});
