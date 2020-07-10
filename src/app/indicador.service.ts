import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Indicador } from './indicador.model';

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

  baseUrlIndicador = "http://localhost:8080/inova_macae/rest/indicador/buscarindicadores"

  constructor(private http: HttpClient) {}

  lerIndicador(): Observable<Indicador[]> {
    return this.http.get<Indicador[]>(this.baseUrlIndicador)
  }
}