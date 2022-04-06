import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(private http: HttpClient) { }

  // conversa com Backend
  salvar(dados: any) {
    return this.http.post('http://localhost:3000/contact-us', dados);
  }

}
  