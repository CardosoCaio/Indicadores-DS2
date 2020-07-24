import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ColetaService } from '../services/coleta.service';
import { Coleta } from './../models/coleta.model';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @ViewChild("indicador", { static: true }) elemento: ElementRef;

  coletas: Coleta[];
  meta = [];
  coleta = [];
  ano = [];

  constructor(private coletaService: ColetaService) { }

  ngOnInit(): void {
    this.coletaService.lerColeta().subscribe(coletas => {
      this.coletas = coletas
      
      for(const dataObj of coletas){
        this.meta.push(dataObj.valorMeta)
        this.coleta.push(dataObj.valorColeta)
        this.ano.push(dataObj.ano)
      }

      console.log(this.meta)
      console.log(this.coleta)
      console.log(this.ano)

    })
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: this.ano,
        datasets: [
          {
            label: 'Evasão escolar 6º ao 9º ano',
            data: this.coleta,
            backgroundColor: 'rgb(3, 78, 160)'
          },
          {
            label: 'Meta do ano',
            data: this.meta,
            backgroundColor: 'rgb(220,220,220'
          }
        ]
      }
    });
  }
}
