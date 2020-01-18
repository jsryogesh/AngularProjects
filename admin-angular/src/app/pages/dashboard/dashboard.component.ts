import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  canvas: any;
  ctx: any;
  
  labels = [];  
  month = [];
  price = [];
  chart = [];
  //ColumnMode = Colum
  datasets =  [{
    label: 'Product1',
    data: [12, 19, 3, 17, 28, 24, 7],
    backgroundColor: "rgba(205,85,0,1)"
  }, {
    label: 'Product2',
    data: [30, 29, 5, 5, 20, 3, 10],
    backgroundColor: "rgba(35,100,145,1)"
  }];


  anothercanvas: any;
  anotherctx: any;

  anotherchart = [];

  anotherdatasets =  [{
    label: 'Sales',
    data: [12, 19, 3, 17, 28, 24, 7,16,20,30,18,10],
    backgroundColor: "rgba(255,140,45,1)"
  }];
  constructor() { }

  ngOnInit() {    

      this.month.push('Jan');
      this.month.push('Feb');
      this.month.push('Mar');
      this.month.push('Apr');
      this.month.push('May');
      this.month.push('Jun');
      this.month.push('Jul');
      this.month.push('Aug');
      this.month.push('Sep');
      this.month.push('Oct');
      this.month.push('Nov');
      this.month.push('Dec');
      
  }

  ngAfterViewInit() {
    
    this.anothercanvas = document.getElementById('anothercanvas');
    this.anotherctx = this.anothercanvas.getContext('2d');
    this.anotherchart = new Chart(this.anotherctx, {
      type: 'line',
      data: {
        labels: this.month,
        datasets: this.anotherdatasets
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.month,
        datasets: this.datasets
      },
      options: {
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }
}
