import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Registro } from '../indicador.model';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  registros: Registro[]
  
  displayedColumns = ['id', 'ano', 'coleta', 'meta'];

  constructor(private registrotService: RegistroService){ }

  ngOnInit(): void {
    this.registrotService.read().subscribe(registros => {
      this.registros = registros
    })
  }  
}
