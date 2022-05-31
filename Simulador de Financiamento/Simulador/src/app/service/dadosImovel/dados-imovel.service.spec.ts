import { TestBed } from '@angular/core/testing';

import { DadosImovelService } from './dados-imovel.service';

describe('DadosImovelService', () => {
  let service: DadosImovelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosImovelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
