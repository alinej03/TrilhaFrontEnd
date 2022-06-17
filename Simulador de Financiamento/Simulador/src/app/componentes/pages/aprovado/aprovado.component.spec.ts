import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { DadosProponenteService } from 'src/app/service/dadosProponente/dados-proponente.service';
import { ValoresAprovadosService } from 'src/app/service/valoresAprovado/valores-aprovados.service';

import { AprovadoComponent } from './aprovado.component';

describe('AprovadoComponent', () => {
  let component: AprovadoComponent;
  let fixture: ComponentFixture<AprovadoComponent>;
  let service: ValoresAprovadosService;
  let dadosProponenteService: DadosProponenteService; 
  let dadosImovelService: DadosImovelService; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprovadoComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    dadosProponenteService = TestBed.inject(DadosProponenteService);
    dadosImovelService = TestBed.inject(DadosImovelService);
    service = TestBed.inject(ValoresAprovadosService);
    fixture = TestBed.createComponent(AprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve limpar os dados inseridos nas telas', () => {
    spyOn(dadosProponenteService, 'limparDados');
    spyOn(dadosImovelService, 'limparDados');
    spyOn(service, 'limparDados');

    component.limparDados();

    expect(dadosProponenteService.limparDados).toHaveBeenCalled();
    expect(dadosImovelService.limparDados).toHaveBeenCalled();
    expect(service.limparDados).toHaveBeenCalled();
  });
});
