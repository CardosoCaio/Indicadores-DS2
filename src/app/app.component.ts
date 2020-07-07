import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root', // Seletor referenciado em index.html
  templateUrl: 'app.component.html', // Criado manualmente, html principal que referencia demais componentes
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {

  }  
}

