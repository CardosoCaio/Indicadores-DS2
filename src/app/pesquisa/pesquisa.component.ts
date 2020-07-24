import { Component, OnInit } from '@angular/core';
import { Eixo } from '../models/eixo.model';
import { EixoService } from '../services/eixo.service';
import { Tema } from '../models/tema.model';
import { TemaService } from '../services/tema.service';
import { Indicador } from '../models/indicador.model';
import { IndicadorService } from '../services/indicador.service';
import { Coleta } from '../models/coleta.model';
import { ColetaService } from '../services/coleta.service';

@Component({
  selector: 'app-pesquisa', // Equivale a home
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit {

  eixos: Eixo[] 
  temas: Tema[] // Atributo 'eixos' é do tipo array de eixos.
  indicadores: Indicador[]
  coletas: Coleta[]

  descricaoEixoSelecionado: string
  descricaoTemaSelecionado: string // Variável que recebe o valor do input da combobox Tema
  idIndicadorSelecionado: string

  // Injeção dos services dentro do component
  constructor(private eixoService: EixoService, private temaService: TemaService, private indicadorService: IndicadorService, private coletaService: ColetaService) { }

  // Método que inicia junto a aplicação e retorna a lista de Eixos
  ngOnInit(): void {
    this.eixoService.lerEixo().subscribe(eixos => {this.eixos = eixos})
  }

  // Método OnClick da combobox Eixos que retorna a lista de Temas
  listarTemas(){
    // Quando o serviço 'temaService' é executado então o método 'lerTema' é iniciado e a variável 'temas' recebe os 'temas' do array Tema[].
    this.temaService.lerTema().subscribe(temas => {this.temas = temas});
  }

  // Método OnClick da combobox Temas que retorna a lista de Indicadores
  listarIndicadores(){
    this.indicadorService.lerIndicador().subscribe(indicadores => {this.indicadores = indicadores})
  }

  // Método que retornará as informações de ano, coleta e meta de um indicador
  listarColetas(){
    this.coletaService.lerColeta().subscribe(coletas => {this.coletas = coletas})
    console.log(this.idIndicadorSelecionado)
  }

  // Método que exibe o período disponível para exibição e respectiva seleção
  selecionarPeriodo(){
  }

  // Método do botão que limpa a tela
  limparTela(){
  }
}
