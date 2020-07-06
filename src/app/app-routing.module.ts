import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './resultado/resultado.component';


const routes: Routes = [{
  path: "", // Raíz
  component: PesquisaComponent
},{
  path: "resultado", // ./resultado
  component: ResultadoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
