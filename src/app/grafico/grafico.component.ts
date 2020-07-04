
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @ViewChild("indicador", { static: true }) elemento: ElementRef;

  constructor() { }

  ngOnInit(): void {
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: ["2012","2013","2014","2015","2016","2017","2018","2019"],
        datasets: [
          {
            label: 'Evasão escolar 6º ao 9º ano',
            data: [3.11,3.62,4.79,3.29,2.51,2.89,1.90,0],
            backgroundColor: 'rgb(106, 90, 205)'
          },
          {
            label: 'Meta do ano',
            data: [3.00,3.00,3.00,3.00,3.00,3.00,2.85,2.00],

            backgroundColor: 'rgb(255, 99, 71)'
          }
        ]
      }
    });
  }
}
/* TESTE CONSUMINDO A API
import { Registro } from './../indicador.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @ViewChild("indicador", { static: true }) elemento: ElementRef;
  registros: Registro[]
  baseUrl = 'http://localhost:3001/registros'
  coleta = [];
  meta = [];

  constructor(private registrotService: RegistroService) { }

  ngOnInit(): void {
    this.registrotService.read().subscribe(registros => {
      this.registros = registros
      new Chart(this.elemento.nativeElement, {
        type: 'bar',
        data: {
          labels: ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
          datasets: [
            {
              label: 'Evasão escolar 6º ao 9º ano',
              data: this.coleta,
              backgroundColor: 'rgb(106, 90, 205)',
            },
            {
              label: 'Meta do ano',
              data: this.meta,
              backgroundColor: 'rgb(255, 99, 71)',
            }
          ]
        }
      });
    }
  }
}
*/