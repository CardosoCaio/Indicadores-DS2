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
    return this.http.get<Eixo[]>(this.urlEixo)
  }
}