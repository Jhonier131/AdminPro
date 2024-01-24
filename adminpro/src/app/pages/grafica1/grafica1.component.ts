import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] = ['Download Sales', 'Mail-Order Sales', 'Store Sales'];
  public labels2: string[] = ['Pan', 'Mais', 'Store'];

  public data1 = [350, 220, 100];
  public data2 = [3, 1, 8];
}
