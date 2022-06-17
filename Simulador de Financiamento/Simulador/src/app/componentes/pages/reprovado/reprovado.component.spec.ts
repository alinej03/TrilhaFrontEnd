import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReprovadoComponent } from './reprovado.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { DadosProponenteService } from 'src/app/service/dadosProponente/dados-proponente.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReprovadoComponent', () => {
  let component: ReprovadoComponent;
  let fixture: ComponentFixture<ReprovadoComponent>;
  let dadosProponenteService: DadosProponenteService;
  let dadosImovelService: DadosImovelService;

  beforeEach(async () => {
    return await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      declarations: [ReprovadoComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    dadosProponenteService = TestBed.inject(DadosProponenteService);
    dadosImovelService = TestBed.inject(DadosImovelService);
    fixture = TestBed.createComponent(ReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve limpar os dados inseridos nas telas', () => {
    spyOn(dadosProponenteService, 'limparDados');
    spyOn(dadosImovelService, 'limparDados');

    component.limpar();

    expect(dadosProponenteService.limparDados).toHaveBeenCalled();
    expect(dadosImovelService.limparDados).toHaveBeenCalled();
  });
});
