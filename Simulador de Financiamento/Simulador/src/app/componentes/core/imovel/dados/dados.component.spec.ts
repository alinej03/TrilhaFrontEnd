import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { ValoresAprovadosService } from 'src/app/service/valoresAprovado/valores-aprovados.service';

import { DadosComponent } from './dados.component';

describe('DadosComponent', () => {
  let component: DadosComponent;
  let fixture: ComponentFixture<DadosComponent>;
  let service: DadosImovelService;
  let valoresAprovadosService: ValoresAprovadosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosComponent ],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(DadosImovelService);
    valoresAprovadosService = TestBed.inject(ValoresAprovadosService);
    fixture = TestBed.createComponent(DadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve retornar que a entrada é permitida', () => {
    component.formularioImovel.controls['seletor'].setValue('');
    component.formularioImovel.controls['rendaMensal'].setValue(1000);
    component.formularioImovel.controls['valorImovel'].setValue(10000);
    component.formularioImovel.controls['valorEntrada'].setValue(3000);
    component.formularioImovel.controls['parcelas'].setValue(36);

    component.calculoEntrada();
    expect(component.entrada).toBe(true);
  });

  it('Deve retornar que a entrada não é permitida', () => {
    component.formularioImovel.controls['seletor'].setValue('');
    component.formularioImovel.controls['rendaMensal'].setValue(1000);
    component.formularioImovel.controls['valorImovel'].setValue(10000);
    component.formularioImovel.controls['valorEntrada'].setValue(1000);
    component.formularioImovel.controls['parcelas'].setValue(36);

    component.calculoEntrada();
    expect(component.entrada).toBe(false);
  });

  it('Deve chamar o metodo de novo Imovel na service', () => {
    spyOn(service, 'setImovel');

    component.salvarDados();
    expect(service.setImovel).toHaveBeenCalled();
  });

  it('Deve setar valor formulario imovel', () => {
    spyOn(valoresAprovadosService, 'setDados');
    component.formularioImovel.controls['valorImovel'].setValue(10000);
    component.formularioImovel.controls['valorEntrada'].setValue(8000);
    component.formularioImovel.controls['rendaMensal'].setValue(2000);
    component.formularioImovel.controls['parcelas'].setValue(36);


    component.calculoFinanciamento();
    expect(valoresAprovadosService.setDados).toHaveBeenCalled();
  });

  it('Deveaa ', () => {
    spyOn(valoresAprovadosService, 'setDados');
    component.formularioImovel.controls['valorImovel'].setValue(100000);
    component.formularioImovel.controls['valorEntrada'].setValue(1000);
    component.formularioImovel.controls['rendaMensal'].setValue(1000);
    component.formularioImovel.controls['parcelas'].setValue(36);


    component.calculoFinanciamento();
    expect(valoresAprovadosService.setDados).not.toHaveBeenCalled();
  });
});
