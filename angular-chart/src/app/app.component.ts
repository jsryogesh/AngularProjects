import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { HttpClient } from "@angular/common/http";
import { Data } from "./Data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "lme";
  data: Data[];
  url = "http://localhost:4200/assets/data/data.json";
  month = [];
  price = [];
  chart = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = new Chart("canvas", {
        type: "line",
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: "#3cba9f",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    });
  }
}
