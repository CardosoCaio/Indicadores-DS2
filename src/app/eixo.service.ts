import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Eixo } from './eixo.model';

@Injectable({
  providedIn: 'root'
})
export class EixoService {

  urlEixo = "http://localhost:8080/inova_macae/rest/eixo/buscareixos"

  constructor(private http: HttpClient) {}

  lerEixo(): Observable<Eixo[]> {
    return this.http.get<Eixo[]>(this.urlEixo) // Retorna o array completo
  }
}

/*
Após selecionado, deve-se guardar a variável 'id',
Então será feita uma requisição get apenas em registros de temas que tenham a variável 'idEixo' iguais a variável 'id' dos registros 'eixo' guardada anteriormente
ou,
Passar o id (idEixo) selecionado anteriormente como parâmetro na pesquisa dos temas
*/