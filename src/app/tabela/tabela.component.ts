import { PesquisaComponent } from './../pesquisa/pesquisa.component';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Coleta } from '../coleta.model';
import { ColetaService } from '../coleta.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  coletas: Coleta[]
  displayedColumns = ['ano', 'coleta', 'meta'];

  constructor(private coletaService: ColetaService){ }

  ngOnInit(): void {
    this.coletaService.lerColeta().subscribe(coletas => {
      this.coletas = coletas // Nome do modelo no teste: registros
    })
  }  
}
