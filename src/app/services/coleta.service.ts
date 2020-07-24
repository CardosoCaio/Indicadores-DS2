import { PesquisaComponent } from './../pesquisa/pesquisa.component';
import { AppComponent } from './../app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Coleta } from '../models/coleta.model';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  idIndicadorUrl = 14; // idIndicadorSelecionado from pesquisa.component.ts

  constructor(private http: HttpClient) {}

  lerColeta(): Observable<Coleta[]> {
    return this.http.get<Coleta[]>("http://localhost:8080/inova_macae/rest/indicador/buscarmetacoleta/"+this.idIndicadorUrl)
  }
}