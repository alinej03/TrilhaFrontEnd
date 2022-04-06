import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrincipalService } from '../service/principal.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit {

  formulario = new FormGroup(
    {
      nome: new FormControl('', [Validators.required,]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required),
    }
  );

  exibirMensagemSucesso: boolean = false;

  constructor(private service: PrincipalService) { }

  ngOnInit(): void {

  }

  post() {
    var dados = {
      id: null,
      name: this.formulario.get('nome')?.value, 
      email: this.formulario.get('email')?.value, 
      message: this.formulario.get('message')?.value,
    };

    this.service.salvar(dados).subscribe(response => {
      this.regraExibirMensagemSucesso();
      this.limparDados();
    });
  }

  regraExibirMensagemSucesso() {
    this.exibirMensagemSucesso = true;
    setTimeout(() => this.exibirMensagemSucesso = false, 5000);
  }

  limparDados() {
    this.formulario.reset();
  }

}
