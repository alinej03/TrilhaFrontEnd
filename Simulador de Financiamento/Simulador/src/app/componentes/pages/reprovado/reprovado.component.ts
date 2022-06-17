import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { DadosProponenteService } from 'src/app/service/dadosProponente/dados-proponente.service';

@Component({
  selector: 'app-reprovado',
  templateUrl: './reprovado.component.html',
  styleUrls: ['./reprovado.component.scss']
})
export class ReprovadoComponent implements OnInit {
  
  constructor( 
    private dadosProponenteService: DadosProponenteService, 
    private dadosImovelService: DadosImovelService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  
  limpar() {
    this.dadosProponenteService.limparDados(),
    this.dadosImovelService.limparDados()
    this.router.navigate([''])
  }

}

