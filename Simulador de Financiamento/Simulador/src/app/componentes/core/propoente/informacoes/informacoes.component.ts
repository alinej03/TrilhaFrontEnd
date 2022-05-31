import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { DadosProponenteService } from 'src/app/service/dadosProponente/dados-proponente.service';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.scss']
})
export class InformacoesComponent implements OnInit {

  maiorIdade: boolean = true;

  formulario = new FormGroup(
    {
      nomeCompleto: new FormControl('', [Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), Validators.required]),
      profissao: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dataNascimento: new FormControl('', Validators.required),
      cep: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
    }
    
  );

  constructor(private service: DadosProponenteService, private dadosImovelService: DadosImovelService) { }

  ngOnInit(): void {
    let dados = this.service.getProponente();

    this.formulario.controls['nomeCompleto'].setValue(dados.nomeCompleto);
    this.formulario.controls['profissao'].setValue(dados.profissao);
    this.formulario.controls['cpf'].setValue(dados.cpf);
    this.formulario.controls['email'].setValue(dados.email);
    this.formulario.controls['dataNascimento'].setValue(dados.dataNascimento);
    this.formulario.controls['cep'].setValue(dados.cep);
    this.formulario.controls['celular'].setValue(dados.celular);
  }

  salvarDados() {
    this.service.setProponente(this.formulario.value);
  }

  limparDados() {
    this.service.limparDados();
    this.dadosImovelService.limparDados();
  }

  validacaoData(valor: any): any {
    if(valor.value.length == 10) {
      let data = valor.value.split('/');
    
      const dataInserida = new Date(`${data[2]}-${data[1]}-${data[0]}`);
      const dataAtual = new Date();

      let idade = Math.abs(dataAtual.getFullYear() - dataInserida.getFullYear());;

      if( dataAtual && idade >= 18) {
        this.maiorIdade = true;
      } else {
        this.maiorIdade = false;
        return alert('Idade minima 18 anos')
      }
    }
  }

}

