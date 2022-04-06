import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PrincipalService } from 'src/app/service/principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  exibirMenuResponsivo: boolean = false;

  constructor( ) { }

  ngOnInit(): void {
  }

  abrirMenu(): void {
    if(this.exibirMenuResponsivo == false) {
      this.exibirMenuResponsivo = true;    
    } else {
      this.exibirMenuResponsivo = false;    
    }
}    

}
