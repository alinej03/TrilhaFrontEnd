import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosImovelService } from 'src/app/service/dadosImovel/dados-imovel.service';
import { ValoresAprovadosService } from 'src/app/service/valoresAprovado/valores-aprovados.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {
  
  entrada: boolean = true;
 
  formularioImovel = new FormGroup(
    {
      seletor: new FormControl('',  Validators.required),
      rendaMensal: new FormControl('', Validators.required),
      valorImovel: new FormControl('', Validators.required),
      valorEntrada: new FormControl('', Validators.required),
      parcelas: new FormControl('',Validators.required)
    }
  );
  
  constructor(private router: Router, private service: DadosImovelService, private valoresAprovadosService: ValoresAprovadosService) {}

  ngOnInit(): void {
    let dados = this.service.getImovel();

    this.formularioImovel.controls['seletor'].setValue(dados.seletor);
    this.formularioImovel.controls['rendaMensal'].setValue(dados.rendaMensal);
    this.formularioImovel.controls['valorImovel'].setValue(dados.valorImovel);
    this.formularioImovel.controls['valorEntrada'].setValue(dados.valorEntrada);
    this.formularioImovel.controls['parcelas'].setValue(dados.parcelas);
  }

  calculoEntrada(){
    var valorImovel = this.formularioImovel.value.valorImovel
    var valoEntrada = this.formularioImovel.value.valorEntrada
    var resultado = valorImovel*20/100
    
    if(valoEntrada >= resultado){
      this.entrada = true;
    } else{
        this.entrada = false; 
    }
  }

  salvarDados() {
    this.service.setImovel(this.formularioImovel.value);
  }

  calculoFinanciamento() {
    const valorResidual = (this.formularioImovel.get('valorImovel')?.value) - (this.formularioImovel.get('valorEntrada')?.value)
    const valorComJuros = valorResidual + (valorResidual * 8 / 100)
    const parcelaMensal = valorComJuros / (this.formularioImovel.value.parcelas)
    var calculoRenda = this.formularioImovel.value.rendaMensal * 30 / 100

    if(parcelaMensal <= calculoRenda){
      this.valoresAprovadosService.setDados({ parcelaInicial: parcelaMensal, valorTotalAprovado: valorResidual });
      this.router.navigate(['/aprovado']);
    } else{
      this.router.navigate(['/reprovado']);
    }
  }

}





  


   
      
  



