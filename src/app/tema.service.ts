import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Tema } from './tema.model';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  baseUrlTema = "http://localhost:8080/inova_macae/rest/tema/buscartemas"

  constructor(private http: HttpClient) {}

  lerTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>(this.baseUrlTema)
  }
}