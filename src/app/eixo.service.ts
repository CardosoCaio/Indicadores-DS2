import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Eixo } from './eixo.model';

@Injectable({
  providedIn: 'root'
})
export class EixoService {

  baseUrlEixo = "http://localhost:8080/inova_macae/rest/eixo/buscareixos"

  constructor(private http: HttpClient) {}

  lerEixo(): Observable<Eixo[]> {
    return this.http.get<Eixo[]>(this.baseUrlEixo) // Retorna o array completo
  }
}

/*
1º Após selecionado, deve-se guardar a variável 'id' do eixo em uma variável auxiliar
2º Então será feito um get apenas em registros de temas que tenham a variável 'idEixo' iguais a variável 'id' dos registros 'eixo' guardada anteriormente
*/