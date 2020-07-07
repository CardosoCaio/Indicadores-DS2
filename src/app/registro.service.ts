import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Registro } from './indicador.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl = "http://localhost:3001/registros" // Serviço teste

  constructor(private http: HttpClient) {}

  read(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.baseUrl)
  }
}
