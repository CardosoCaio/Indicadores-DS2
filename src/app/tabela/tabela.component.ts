import { PesquisaComponent } from './../pesquisa/pesquisa.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Coleta } from '../models/coleta.model';
import { ColetaService } from '../services/coleta.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  coletas: Coleta[]
  displayedColumns = ['ano', 'coleta', 'meta'];

  constructor(private coletaService: ColetaService){ }

  ngOnInit(): void { // Equivale ao método listarColetas do pesquisa.component.ts
    this.coletaService.lerColeta().subscribe(coletas => {
      this.coletas = coletas
      //console.log(this.idIndicadorSelecionado)
    })
  }  
}
