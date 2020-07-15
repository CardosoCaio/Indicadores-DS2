import { Component, OnInit } from '@angular/core';
import { Eixo } from '../eixo.model';
import { EixoService } from '../eixo.service';
import { Tema } from './../tema.model';
import { TemaService } from '../tema.service';
import { Indicador } from '../indicador.model';
import { IndicadorService } from '../indicador.service';
import { Coleta } from '../coleta.model';
import { ColetaService } from '../coleta.service';

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

  descricaoEixo: string
  descricaoTema: string // Variável que recebe o input da combobox Tema
  descricaoIndicador: string

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
    console.log(this.descricaoIndicador)
  }

  // Método que exibe o período disponível para exibição e respectiva seleção
  selecionarPeriodo(){
  }

  // Método do botão que limpa a tela
  limparTela(){
  }
}
