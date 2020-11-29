import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-c02-emissions',
  templateUrl: './c02-emissions.component.html',
  styleUrls: ['./c02-emissions.component.scss']
})
export class C02EmissionsComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  chartOptions: {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: 'green',
        plotBorderWidth: 0,
        plotShadow: true,
        borderWidth: 0,
        margin: [2, 2, 2, 2],
        height: 300
      },
      title: {
        text: 'CO2<br>Emissions<br>Saved',
        align: 'center',
        verticalAlign: 'middle',
        y: 60,
        style: {
          color: 'white',
          fontWeight: 'bold'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -30,
            style: {
              fontWeight: 'bold',
              color: 'white'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '100%'
        }
      },
      series: [{
        type: 'pie',
        name: 'CO2 Emission Saved',
        innerSize: '50%',
        data: [
          ['Achieved', 78],
          ['To Achieve', 100],
        ]
      }]
    };

}}
