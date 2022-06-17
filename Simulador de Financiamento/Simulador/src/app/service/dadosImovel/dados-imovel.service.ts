import { Injectable } from '@angular/core';
import { imovel } from 'src/app/componentes/model/dados.model';

@Injectable({
  providedIn: 'root'
})
export class DadosImovelService {
  imovel: imovel = {
    id: 0,
    seletor: '',
    rendaMensal: null,
    valorImovel: null,
    valorEntrada: null,
    parcelas: null,
  }

  constructor() { }

  getImovel() {
    return this.imovel;
  }

  setImovel(novoImovel: imovel) {
    this.imovel = novoImovel;
  }

  limparDados() {
    this.imovel = {
      id: 0,
      seletor: '',
      rendaMensal: null,
      valorImovel: null,
      valorEntrada: null,
      parcelas: null,
    }
  }
}
