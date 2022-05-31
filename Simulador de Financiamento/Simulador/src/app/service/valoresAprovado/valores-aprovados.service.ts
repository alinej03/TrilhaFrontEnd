import { Injectable } from '@angular/core';
import { aprovado } from 'src/app/componentes/model/aprovado.model';

@Injectable({
  providedIn: 'root'
})
export class ValoresAprovadosService {

  aprovado = {
    parcelaInicial: 0,
    valorTotalAprovado: 0
  }

  constructor() { }

  getDados() {
    return this.aprovado;
  }

  setDados(dados: aprovado) {
    this.aprovado = dados;
  }

  limparDados() {
    this.aprovado = {
      parcelaInicial: 0,
      valorTotalAprovado: 0
    }
  }
}
