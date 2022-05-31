import { Injectable } from '@angular/core';
import { InfModel } from 'src/app/componentes/model/informacoes.model';

@Injectable({
  providedIn: 'root'
})
export class DadosProponenteService {

  private proponente: InfModel = {
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

  validacao() {
    return this.proponente.id !== 0 && this.proponente.nomeCompleto !== '' && this.proponente.profissao !== '' && this.proponente.cpf !== '' && this.proponente.email !== ''
      && this.proponente.dataNascimento !== '' && this.proponente.cep !== '' && this.proponente.celular !== ''
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
