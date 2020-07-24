import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Coleta } from '../models/coleta.model';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  constructor(private http: HttpClient) {}

  lerColeta(): Observable<Coleta[]> {
    return this.http.get<Coleta[]>("http://localhost:8080/inova_macae/rest/indicador/buscarmetacoleta/14")
  }
}