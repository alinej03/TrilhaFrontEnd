import { TestBed } from '@angular/core/testing';

import { ValoresAprovadosService } from './valores-aprovados.service';

describe('ValoresAprovadosService', () => {
  let service: ValoresAprovadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValoresAprovadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
