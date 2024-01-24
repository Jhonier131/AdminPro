import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() title!: string;

  @Input() labels: string[] = [
    'label 1',
    'label 2',
    'label 3',
  ];

  @Input() dataChart: number[] = [100, 200, 500];
  
  ngOnInit(): void {
    this.onUpdate();
  }

  onUpdate = ()=>{
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [{ data: this.dataChart}]
    };
  }
  public doughnutChartData!: ChartData<'doughnut'>;

}
