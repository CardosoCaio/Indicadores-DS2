import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './resultado/resultado.component';


const routes: Routes = [{
  path: "", // Diretório raíz, aplicado quando a aplicação inicia.
  component: PesquisaComponent
},{
  path: "resultado", // Diretório de redirecionamento do botão "Exibir" após sua execução.
  component: ResultadoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
