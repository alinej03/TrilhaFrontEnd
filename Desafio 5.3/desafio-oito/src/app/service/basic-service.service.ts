import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class BasicServiceService {

  nome = [
    {nome: 'Aline'},
    {nome: 'Marcela'}
  ];

  constructor(private http: HttpClient)  { }

  getUsers() { 
    return this.nome;
  }

  getUserById(nome: number) {
    return this.nome[nome];
  }

  setUsers(nome: any) { 
    this.nome.push(nome);
    
  }

  deleteUser() { 
    this.nome;
  }

  //Requisicoes HTTP
  getHttp() {
    return this.http.get('Endereco_do_Backend');
  }

  postHttp() {
    return this.http.post('Endereco_do_Backend', {});
  }

  putHttp() {
    return this.http.put('Endereco_do_Backend', {});
  }

  deleteHttp() {
    return this.http.delete('Endereco_do_Backend');
  }

}
