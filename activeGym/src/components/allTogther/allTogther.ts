import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
    selector: 'allTogther',
    templateUrl: 'allTogther.html',  
    
  })
  export class AllTogther implements OnInit {
  
    //submitResponse:number=0;
    bulkId: string;
    //testId:string;
    uploadDate: string;
    executionDate: string;
    numberOfTransactions: string;
    totalAmount: string;
    options = {
      year: "numeric", month: "short",
      day: "numeric"
    };
  
    constructor(private http: Http) { }
  
    ngOnInit(): void {
       
        this.http.get('https://service-payments.azurewebsites.net/bulks/search/is-new-requests?companyId=USACUGYMACTIVE&status=Uploaded')
        .map(res => { return res.json() })
        .subscribe(
        data => {
          this.uploadDate = new Date(data._embedded.bulks[0].uploadDate).toLocaleDateString('en-US', this.options);
          this.bulkId = data._embedded.bulks[0].id;
          this.executionDate = data._embedded.bulks[0].executionDate;
          this.numberOfTransactions = data._embedded.bulks[0].numberOfTransactions.toString();
          this.totalAmount = data._embedded.bulks[0].totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
  
      );
    }
  }