import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Coleta } from '../models/coleta.model';

@Injectable({
  providedIn: 'root'
})
export class ColetaService { // Obs* Este serviço é um teste, portanto não faz parte da aplicação e deve ser substituído

  coletabaseUrl = "http://localhost:8080/inova_macae/rest/coleta/buscarcoletas"
  constructor(private http: HttpClient) {}

  lerColeta(): Observable<Coleta[]> {
    return this.http.get<Coleta[]>(this.coletabaseUrl)
  }
}