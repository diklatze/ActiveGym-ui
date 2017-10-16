import { Component,Input } from '@angular/core';

@Component({
  selector: 'status',
  templateUrl: 'status.html',
  styles: [
    ``,
  ]
})
export class Status {

  @Input() numberOfTransactions:string;
  @Input() totalAmount:string;
  @Input() name: string;
  @Input() numOfTxs: number;
  @Input() totalAmountOfOne: number;



  constructor() {
   
  }

}