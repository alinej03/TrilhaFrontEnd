import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { DadosProponenteService } from 'src/app/service/dadosProponente/dados-proponente.service';
import { ValoresAprovadosService } from 'src/app/service/valoresAprovado/valores-aprovados.service';
import { aprovado } from '../../model/aprovado.model';

@Component({
  selector: 'app-aprovado',
  templateUrl: './aprovado.component.html',
  styleUrls: ['./aprovado.component.scss']
})
export class AprovadoComponent implements OnInit {

  dados!: aprovado;

  constructor(
    private service: ValoresAprovadosService,
    private dadosProponenteService: DadosProponenteService, 
    private dadosImovelService: DadosImovelService, 
    private router: Router ) { } 

  ngOnInit(): void {
    this.dados = this.service.getDados();
  }

  limparDados() {
    this.service.limparDados();
    this.dadosProponenteService.limparDados(),
    this.dadosImovelService.limparDados()
    this.router.navigate([''])
  }

  

}
