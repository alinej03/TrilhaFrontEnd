import { Injectable } from '@angular/core';
import { InfModel } from 'src/app/componentes/model/informacoes.model';

@Injectable({
  providedIn: 'root'
})
export class DadosProponenteService {

  proponente: InfModel = {
    id: 0,
    nomeCompleto: '',
    profissao: '',
    cpf: '',
    email: '',
    dataNascimento: '',
    cep: '',
    celular: ''
  }

  constructor() { }

  getProponente() {
    return this.proponente;
  }

  setProponente(novoProponente: InfModel) {
    this.proponente = novoProponente;
  }

  limparDados() {
    this.proponente = {
      id: 0,
      nomeCompleto: '',
      profissao: '',
      cpf: '',
      email: '',
      dataNascimento: '',
      cep: '',
      celular: ''
    }
  }
}
