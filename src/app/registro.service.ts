import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Registro } from './indicador.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService { // Obs* Este serviço é um teste, portanto não faz parte da aplicação e deve ser substituído

  baseUrl = "http://localhost:3001/registros"
  constructor(private http: HttpClient) {}

  read(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.baseUrl)
  }
}
