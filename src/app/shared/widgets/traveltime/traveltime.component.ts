import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-traveltime',
  templateUrl: './traveltime.component.html',
  styleUrls: ['./traveltime.component.scss']
})
export class TraveltimeComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  chartOptions: {};
  Highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {this.chartOptions = {
    chart: {
      type: 'spline',
      plotBackgroundColor: '#F9E79F'
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
      name: "Travel Time",
      data: [
        [Date.UTC(1970, 10, 25), 20],
        [Date.UTC(1970, 11,  6), 30],
        [Date.UTC(1970, 11, 20), 60],
        [Date.UTC(1970, 11, 25), 45],
        [Date.UTC(1971, 0,  4), 21],
        [Date.UTC(1971, 0, 17), 35],
        [Date.UTC(1971, 0, 24), 36],
        [Date.UTC(1971, 1,  4), 38],
        [Date.UTC(1971, 1, 14), 25],
        [Date.UTC(1971, 2,  6), 29],
        [Date.UTC(1971, 2, 14), 37],
        [Date.UTC(1971, 2, 24), 39],
        [Date.UTC(1971, 3,  1), 19],
        [Date.UTC(1971, 3, 11), 20],
        [Date.UTC(1971, 3, 27), 58],
        [Date.UTC(1971, 4,  4), 29],
        [Date.UTC(1971, 4,  9), 15],
        [Date.UTC(1971, 4, 14), 10],
        [Date.UTC(1971, 4, 19), 15],
        [Date.UTC(1971, 5,  4), 0],
        [Date.UTC(1971, 5,  9), 18],
        [Date.UTC(1971, 5, 14), 19],
        [Date.UTC(1971, 5, 19), 28],
        [Date.UTC(1971, 5, 24), 39],
        [Date.UTC(1971, 5, 29), 28],
        [Date.UTC(1971, 6,  3), 19],
        [Date.UTC(1971, 6,  4), 25]
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
