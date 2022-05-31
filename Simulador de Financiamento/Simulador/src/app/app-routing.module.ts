import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosComponent } from './componentes/core/imovel/dados/dados.component';
import { InformacoesComponent } from './componentes/core/propoente/informacoes/informacoes.component';
import { InicioComponent } from './componentes/pages/inicio/inicio.component';
import { AprovadoComponent } from './componentes/pages/aprovado/aprovado.component';
import { ReprovadoComponent } from './componentes/pages/reprovado/reprovado.component';


const routes: Routes = [
  { path:'', component: InicioComponent },
  { path:'informacoes', component: InformacoesComponent },
  { path:'dados', component: DadosComponent },
  { path:'aprovado', component: AprovadoComponent },
  { path:'reprovado', component: ReprovadoComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
