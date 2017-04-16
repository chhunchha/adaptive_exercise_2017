import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'ai-multibarchart',
  templateUrl: './multibarchart.component.html',
  styleUrls: ['./multibarchart.component.scss']
})
export class MultibarchartComponent implements OnInit, OnChanges {

  @Input() public chartTitle: string;
  @Input() public barChartLabels: string[] = [];
  @Input() public barChartData: any[] = [];

  public barChartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [{
        barThickness: 40,
        categoryPercentage: 0.6,
        barPercentage: 1.0,
        gridLines: {
          display: false
        },
        tickOptions: { showGridline: false }
      }],
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    },
    title: {
      display: true,
      fontSize: 24,
      text: this.chartTitle,
      fontStyle: 'normal'
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  };

  public barChartColors = [
    { backgroundColor: 'rgb(94, 155, 211)' },
    { backgroundColor: 'rgb(236, 123, 58)' }
  ];

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  public ngOnChanges() {
    this.barChartOptions.title.text = this.chartTitle;
    this.barChartData = this.barChartData.slice();
  }

}
