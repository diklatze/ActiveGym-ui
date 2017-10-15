import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Http,Response,Headers } from '@angular/http';



@Component({
  selector: 'bulk',
  templateUrl: 'bulk.html',
  styles: [
    ``,
  ]
})
export class Bulk implements OnInit{
  submitResponse:number=0;
  bulkId:string;
  uploadDate:string;
  executionDate:string;
  numberOfTransactions:string;
  totalAmount:string;
  options = {
    year: "numeric", month: "short",
    day: "numeric"
};

  constructor(private http: Http) {}
  
  bulkSubmit(){
    this.submitResponse=1;
    let headers = new Headers;
    // headers.append('Content-Type', 'application/json');
    let body = {};
    this.http.post('http://service-request-for-payments.azurewebsites.net/bulk/'+this.bulkId+'/submit', JSON.stringify(body), { headers: headers })
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
      
    );

    
  }

  ngOnInit(): void {
    
    
    this.http.get('https://service-payments.azurewebsites.net/bulks/search/is-new-requests?companyId=USACUGYMACTIVE&status=Uploaded')
    .map(res =>{ return res.json()})
    .subscribe(
      data => { this.uploadDate = new Date(data._embedded.bulks[0].uploadDate).toLocaleDateString('en-US', this.options); 
                this.bulkId = data._embedded.bulks[0].id;
                this.executionDate = data._embedded.bulks[0].executionDate;
                this.numberOfTransactions = data._embedded.bulks[0].numberOfTransactions.toString();
                this.totalAmount = data._embedded.bulks[0].totalAmount.toLocaleString('en-US', {  style: 'currency',  currency: 'USD'});},
     
      );
  }
   
  
  
}


