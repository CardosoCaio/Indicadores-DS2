//import { HttpClientModule } from '@angular/common/http'; Sem module *
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Registro } from './indicador.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  baseUrl = "http://localhost:3001/registros"

  constructor(private http: HttpClient) {} // Sem module *

  read(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.baseUrl)
  }
}
