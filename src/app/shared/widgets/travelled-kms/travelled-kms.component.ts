import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-travelled-kms',
  templateUrl: './travelled-kms.component.html',
  styleUrls: ['./travelled-kms.component.scss']
})
export class TravelledKmsComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {this.chartOptions = {
    chart: {
      type: 'spline',
      plotBackgroundColor: '#F1948A'
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} Km'
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

    colors: ['black'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
      name: "Travelled Kms",
      data: [
        [Date.UTC(1970, 10, 25), 5],
        [Date.UTC(1970, 11,  6), 20],
        [Date.UTC(1970, 11, 20), 10],
        [Date.UTC(1970, 11, 25), 15],
        [Date.UTC(1971, 0,  4), 20],
        [Date.UTC(1971, 0, 17), 25],
        [Date.UTC(1971, 0, 24), 15],
        [Date.UTC(1971, 1,  4), 10],
        [Date.UTC(1971, 1, 14), 9],
        [Date.UTC(1971, 2,  6), 20],
        [Date.UTC(1971, 2, 14), 7],
        [Date.UTC(1971, 2, 24), 18],
        [Date.UTC(1971, 3,  1), 15],
        [Date.UTC(1971, 3, 11), 21],
        [Date.UTC(1971, 3, 27), 22],
        [Date.UTC(1971, 4,  4), 30],
        [Date.UTC(1971, 4,  9), 21],
        [Date.UTC(1971, 4, 14), 10],
        [Date.UTC(1971, 4, 19), 9],
        [Date.UTC(1971, 5,  4), 5],
        [Date.UTC(1971, 5,  9), 10],
        [Date.UTC(1971, 5, 14), 11],
        [Date.UTC(1971, 5, 19), 12],
        [Date.UTC(1971, 5, 24), 10],
        [Date.UTC(1971, 5, 29), 15],
        [Date.UTC(1971, 6,  3), 10],
        [Date.UTC(1971, 6,  4), 15]
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
