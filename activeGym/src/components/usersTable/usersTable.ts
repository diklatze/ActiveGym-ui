import { Component,Input } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {HelpService} from '../../services/help.services';
import { OnInit } from '@angular/core';

class catagory {
  name: string;
  numOfTxs: number;
  totalAmount: number;
  split : {
      GOLD: number;
      PLATINUM: number;
      SILVER:number;
  }

}
@Component({
  selector: 'usersTable',
  providers: [HelpService],
  templateUrl: 'usersTable.html',
  styles: [
    ``,
  ]
})
export class UsersTable{
  
  @Input() bulkId:string;
  @Input() numberOfTransactions:string;
  @Input() totalAmount:string;
  
  categoriesStatus: catagory[];
  constructor(private http: Http, public helpService:HelpService) {}

refresh (){
  this.http.get('http://service-request-for-payments.azurewebsites.net/bulk/'+this.bulkId+'/status')
  .map(res => { return res.json() })
  .subscribe(
  data => {
    this.categoriesStatus = data.categoriesStatus;

  },

);
}
}