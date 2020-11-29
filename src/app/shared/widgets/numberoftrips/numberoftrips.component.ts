import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-numberoftrips',
  templateUrl: './numberoftrips.component.html',
  styleUrls: ['./numberoftrips.component.scss']
})
export class NumberoftripsComponent implements OnInit {
  chartOptions: {};
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {this.chartOptions = {
    chart: {
      type: 'column',
      plotBackgroundColor: '#58D68D'
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br>',
      pointFormat: '{point.x:%e. %b}: {point.y:.2f} minutes'
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
        pointWidth: 40,
        marker: {
          enabled: true
        }
      }
    },

    colors: ['#A569BD'],

    // Define the data points. All series have a dummy year
    // of 1970/71 in order to be compared on the same x axis. Note
    // that in JavaScript, months start at 0 for January, 1 for February etc.
    series: [{
      name: 'Number of Trips',
      data: [
        [Date.UTC(1970, 10, 25), 2],
        [Date.UTC(1970, 11,  6), 4],
        [Date.UTC(1970, 11, 20), 3],
        [Date.UTC(1970, 11, 25), 3],
        [Date.UTC(1971, 0,  4), 2],
        [Date.UTC(1971, 0, 17), 1],
        [Date.UTC(1971, 0, 24), 10],
        [Date.UTC(1971, 1,  4), 9],
        [Date.UTC(1971, 1, 14), 5],
        [Date.UTC(1971, 2,  6), 5],
        [Date.UTC(1971, 2, 14), 2],
        [Date.UTC(1971, 2, 24), 1],
        [Date.UTC(1971, 3,  1), 3],
        [Date.UTC(1971, 3, 11), 2],
        [Date.UTC(1971, 3, 27), 2],
        [Date.UTC(1971, 4,  4), 9],
        [Date.UTC(1971, 4,  9), 10],
        [Date.UTC(1971, 4, 14), 7],
        [Date.UTC(1971, 4, 19), 3],
        [Date.UTC(1971, 5,  4), 2],
        [Date.UTC(1971, 5,  9), 1],
        [Date.UTC(1971, 5, 14), 5],
        [Date.UTC(1971, 5, 19), 9],
        [Date.UTC(1971, 5, 24), 0],
        [Date.UTC(1971, 5, 29), 7],
        [Date.UTC(1971, 6,  3), 8],
        [Date.UTC(1971, 6,  4), 0]
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
