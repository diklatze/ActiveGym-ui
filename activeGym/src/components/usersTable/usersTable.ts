import { Component, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HelpService } from '../../services/help.services';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

class catagory {
  name: string;
  numOfTxs: number;
  totalAmount: number;
  split: {
    GOLD: number;
    PLATINUM: number;
    SILVER: number;
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
export class UsersTable {

  @Input() bulkId: string;
  @Input() numberOfTransactions: string;
  @Input() totalAmount: string;

  today: number;
  categoriesStatus: catagory[];
  constructor(private http: Http, public helpService: HelpService) { }
  check: number = 1;

  refresh() {
    this.today= Date.now();
    this.check = 0;
    this.http.get('http://service-request-for-payments.azurewebsites.net/bulk/' + this.bulkId + '/status')
    .map(res => {
      // If request fails, throw an Error that will be caught
      if(res.status < 200 || res.status >= 300) {
        throw new Error('This request has failed ' + res.status);

      } 
      // If everything went fine, return the response
      else {
        
        return res.json();
      }
    })
      .subscribe(
      data => {
        this.categoriesStatus = data.categoriesStatus;
        this.check = 1;

      },

    );
   
  }
}