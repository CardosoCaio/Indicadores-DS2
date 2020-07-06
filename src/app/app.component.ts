import { RegistroService } from './registro.service';
import { Component, OnInit } from '@angular/core';
import { Registro } from './indicador.model';

@Component({
  selector: 'app-root', // Seletor referenciado em index.html
  templateUrl: 'app.component.html', // Criado manualmente, html principal que referencia demais componentes
  styleUrls: ['app.component.css']
})


export class AppComponent implements OnInit{

  //registros: Registro[]

  constructor(){ } //(private registrotService: RegistroService)

  ngOnInit(): void {
  }
}
