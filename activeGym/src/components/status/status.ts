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
  @Input('catagory.name') name: string;
  @Input('catagory.numOfTxs') numOfTxs: number = 0;
  @Input('catagory.totalAmountString') totalAmountOfOne: number = 0;

  // totalAmountOfOneString :string = this.totalAmountOfOne.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  

  constructor() {
   
  }
}