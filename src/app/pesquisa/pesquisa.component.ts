import { Component, OnInit } from '@angular/core';
import { Eixo } from '../eixo.model';
import { EixoService } from '../eixo.service';
import { Tema } from '../tema.model';
import { TemaService } from '../tema.service';
import { IndicadorService } from '../indicador.service';
import { Indicador } from '../indicador.model';

@Component({
  selector: 'app-pesquisa', // Equivale a home
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  eixos: Eixo[] // eixos recebe o array dos registros de Eixo
  temas: Tema[]
  indicadores: Indicador[]

  constructor(private eixoService: EixoService, private temaService: TemaService, private indicadorService: IndicadorService) { }

  // Método que inicia junto a aplicação e retorna a lista de Eixos
  ngOnInit(): void {
    this.eixoService.lerEixo().subscribe(eixos => {
      this.eixos = eixos
    })
  }

  // Método OnClick que retorna a lista de Temas
  selecionarEixo(){
    this.temaService.lerTema().subscribe(temas => {this.temas = temas})
  }

  // Método OnClick que retorna a lista de Indicadores
  selecionarTema(){
    this.indicadorService.lerIndicador().subscribe(indicadores => {this.indicadores = indicadores})
  }

  // Método que retornará as informações de ano, coleta e meta de um indicador
  selecionarIndicador(){
  }

  // Botão que direciona para as informações do indicador selecionado
  exibirInfoIndicador(){
  }

  // Botão que limpa a tela
  limparTela(){
  }
}
