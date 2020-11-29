import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {this.chartOptions = {
    chart: {
      type: 'column',
      plotBackgroundColor: null
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} Euros'
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false,
    },
    xAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },
    yAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null
      },
      startOnTick: false,
      endOnTick: false,
      tickOptions: []
    },

    plotOptions: {
      series: {
        marker: {
          enabled: true
        }
      }
    },

    colors: ['#DC7633'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
      name: "Transactions",
      data: [
        [Date.UTC(1970, 10, 25), 2.3],
        [Date.UTC(1970, 11,  6), 4.7],
        [Date.UTC(1970, 11, 20), 2.3],
        [Date.UTC(1970, 11, 25), 4.7],
        [Date.UTC(1971, 0,  4), 4.7],
        [Date.UTC(1971, 0, 17), 4.7],
        [Date.UTC(1971, 0, 24), 2.3],
        [Date.UTC(1971, 1,  4), 4.7],
        [Date.UTC(1971, 1, 14), 2.3],
        [Date.UTC(1971, 2,  6), 4.7],
        [Date.UTC(1971, 2, 14), 4.7],
        [Date.UTC(1971, 2, 24), 4.7],
        [Date.UTC(1971, 3,  1), 4.7],
        [Date.UTC(1971, 3, 11), 4.7],
        [Date.UTC(1971, 3, 27), 4.7],
        [Date.UTC(1971, 4,  4), 2.3],
        [Date.UTC(1971, 4,  9), 2.3],
        [Date.UTC(1971, 4, 14), 2.3],
        [Date.UTC(1971, 4, 19), 4.7],
        [Date.UTC(1971, 5,  4), 2.3],
        [Date.UTC(1971, 5,  9), 4.7],
        [Date.UTC(1971, 5, 14), 4.7],
        [Date.UTC(1971, 5, 19), 4.7],
        [Date.UTC(1971, 5, 24), 2.3],
        [Date.UTC(1971, 5, 29), 4.7],
        [Date.UTC(1971, 6,  3), 4.7],
        [Date.UTC(1971, 6,  4), 2.3]
      ]
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          plotOptions: {
            series: {
              marker: {
                radius: 2.5
              }
            }
          }
        }
      }]
    }
  };
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 100);
  }

}
