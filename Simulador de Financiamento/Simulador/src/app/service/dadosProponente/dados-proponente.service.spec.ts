import { TestBed } from '@angular/core/testing';

import { DadosProponenteService } from './dados-proponente.service';

describe('DadosProponenteService', () => {
  let service: DadosProponenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosProponenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
