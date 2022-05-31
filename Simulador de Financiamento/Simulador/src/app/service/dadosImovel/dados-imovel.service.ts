import { Injectable } from '@angular/core';
import { imovel } from 'src/app/componentes/model/dados.model';

@Injectable({
  providedIn: 'root'
})
export class DadosImovelService {
  private imovel: imovel = {
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

  validacao() {
    return this.imovel.id !== 0 && this.imovel.seletor !== '' && this.imovel.rendaMensal !== 0 && this.imovel.valorImovel !== 0
      && this.imovel.valorEntrada !== 0 && this.imovel.parcelas !== 0
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
