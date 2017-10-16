import { Component } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {HelpService} from '../../services/help.services';



@Component({
  selector: 'usersTable',
  providers: [HelpService],
  templateUrl: 'usersTable.html',
  styles: [
    ``,
  ]
})
export class UsersTable {



  constructor(private http: Http, private helpService:HelpService) {
   
  }

  // getStatus(){
  //   this.http.get('https://service-payments.azurewebsites.net/bulks/search/is-new-requests?companyId=USACUGYMACTIVE&status=Uploaded')
  //   .map(res =>{ return res.json()})
  //   .subscribe(
  //     data => { this.uploadDate = new Date(data._embedded.bulks[0].uploadDate).toLocaleDateString('en-US', this.options); 
  //               this.bulkId = data._embedded.bulks[0].id;
  //               this.executionDate = data._embedded.bulks[0].executionDate;
  //               this.numberOfTransactions = data._embedded.bulks[0].numberOfTransactions.toString();
  //               this.totalAmount = data._embedded.bulks[0].totalAmount.toLocaleString('en-US', {  style: 'currency',  currency: 'USD'});},
     
  //     );

  }

