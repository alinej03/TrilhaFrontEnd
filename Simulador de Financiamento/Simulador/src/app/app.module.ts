import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadosComponent } from './componentes/core/imovel/dados/dados.component';
import { InformacoesComponent } from './componentes/core/propoente/informacoes/informacoes.component';
import { AprovadoComponent } from './componentes/pages/aprovado/aprovado.component';
import { CabecalhoComponent } from './componentes/shared/cabecalho/cabecalho.component';
import { InicioComponent } from './componentes/pages/inicio/inicio.component';
import { NgxMaskModule } from 'ngx-mask';
import { ReprovadoComponent } from './componentes/pages/reprovado/reprovado.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    DadosComponent,
    InformacoesComponent,
    AprovadoComponent,
    ReprovadoComponent,
    InicioComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
