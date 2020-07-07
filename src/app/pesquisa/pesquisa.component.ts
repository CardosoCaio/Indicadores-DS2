import { Component, OnInit } from '@angular/core';
import { Eixo } from '../eixo.model';
import { EixoService } from '../eixo.service';
import { TemaService } from '../tema.service';
import { IndicadorService } from '../indicador.service';
import { Indicador } from '../indicador.model';
import { Tema } from '../tema.model';

@Component({
  selector: 'app-pesquisa', // Equivale a home
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  eixos: Eixo[]
  temas: Tema[]
  indicadores: Indicador[]

  constructor(private eixoService: EixoService, private temaService: TemaService, private indicadorService: IndicadorService) { }

  ngOnInit(): void {
    this.eixoService.readEixo().subscribe(eixos => {
      this.eixos = eixos
    })

    this.temaService.readTema().subscribe(temas => {
      this.temas = temas
    })

    this.indicadorService.readIndicador().subscribe(indicadores => {
      this.indicadores = indicadores
    })
  }
}
