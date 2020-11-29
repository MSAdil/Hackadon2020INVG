import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  constructor() { }

  chartOptions: {};
  Highcharts = Highcharts;

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'scatter',
        zoomType: 'xy',
        plotBackgroundColor: '#2980B9',
      },
      title: {
        text: 'Ranking',
        style: {
          fontWeight: 'bold',
          fontSize: "30px"
        }
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Your Position'
        },
        startOnTick: false,
        endOnTick: false,
        showLastLabel: false
      },
      yAxis: {
        title: {
          text: 'CO2 Emissions Saved (Kg)'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
      },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'white'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x}, {point.y} Percentile'
          }
        }
      },
      series: [{
        name: 'You',
        color: 'red',
        data: [[42.0, 70]]

      }, {
        name: 'Others',
        color: 'rgba(119, 152, 191, .5)',
        data: [[1, 44]
          ,
          [50, 98]
          ,
          [51, 119]
          ,
          [73, 183]
          ,
          [82, 196]
          ,
          [95, 208]
          ,
          [97, 41]
          ,
          [5, 207]
          ,
          [54, 52]
          ,
          [39, 105]
          ,
          [82, 92]
          ,
          [14, 42]
          ,
          [93, 161]
          ,
          [82, 79]
          ,
          [12, 112]
          ,
          [47, 130]
          ,
          [66, 186]
          ,
          [80, 107]
          ,
          [75, 89]
          ,
          [96, 21]
          ,
          [8, 152]
          ,
          [94, 87]
          ,
          [47, 98]
          ,
          [3, 146]
          ,
          [32, 78]
          ,
          [24, 130]
          ,
          [43, 46]
          ,
          [38, 149]
          ,
          [47, 80]
          ,
          [39, 97]
          ,
          [32, 34]
          ,
          [2, 39]
          ,
          [51, 50]
          ,
          [9, 155]
          ,
          [87, 189]
          ,
          [19, 210]
          ,
          [99, 22]
          ,
          [15, 63]
          ,
          [3, 84]
          ,
          [50, 110]
          ,
          [75, 56]
          ,
          [60, 130]
          ,
          [54, 114]
          ,
          [100, 52]
          ,
          [92, 91]
          ,
          [51, 84]
          ,
          [60, 132]
          ,
          [94, 95]
          ,
          [84, 87]
          ,
          [36, 27]
          ,
          [72, 82]
          ,
          [50, 210]
          ,
          [72, 161]
          ,
          [46, 210]
          ,
          [65, 94]
          ,
          [25, 81]
          ,
          [45, 199]
          ,
          [50, 32]
          ,
          [80, 64]
          ,
          [61, 27]
          ,
          [64, 176]
          ,
          [18, 155]
          ,
          [74, 64]
          ,
          [7, 31]
          ,
          [1, 177]
          ,
          [86, 175]
          ,
          [45, 136]
          ,
          [60, 204]
          ,
          [31, 161]
          ,
          [49, 41]
          ,
          [11, 61]
          ,
          [10, 89]
          ,
          [20, 42]
          ,
          [64, 145]
          ,
          [94, 152]
          ,
          [38, 43]
          ,
          [92, 107]
          ,
          [40, 82]
          ,
          [97, 39]
          ,
          [12, 43]
          ,
          [89, 144]
          ,
          [68, 200]
          ,
          [91, 52]
          ,
          [90, 53]
          ,
          [90, 199]
          ,
          [99, 190]
          ,
          [33, 72]
          ,
          [32, 186]
          ,
          [43, 46]
          ,
          [50, 205]
          ,
          [84, 160]
          ,
          [83, 43]
          ,
          [10, 177]
          ,
          [89, 171]
          ,
          [6, 158]
          ,
          [5, 108]
          ,
          [92, 29]
          ,
          [76, 86]
          ,
          [1, 127]
          ,
          [62, 151]]
      }],
    };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 100);
  }

}
