import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tema } from '../models/tema.model';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  urlTema = "http://localhost:8080/inova_macae/rest/tema/buscartemas"

  constructor(private http: HttpClient) {}

  // Método que retorna um observable que vai ler um array de Temas.
  lerTema(): Observable<Tema[]> { 
    // Retorna uma requisição http do tipo 'get' que retorna uma lista de temas *<Tema[]> através da url dos temas.
    return this.http.get<Tema[]>(this.urlTema) // Necessita do parâmetro 'idEixo' para retornar apenas os eixos do 'eixo' selecionado pelo usuário.
  }
}