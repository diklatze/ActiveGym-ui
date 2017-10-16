import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
// import 



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [
    `body {
      background-color: #FFFFFF;
      background-image: url("../../assets/images/All_together.png");
      background-color: #cccccc;
    }`,

    `.ui.menu .item img.logo {
      margin-right: 1.5em;
    }`,

    `.main.container {
      margin-top: 7em;
    }`,

    ` .wireframe {
      margin-top: 2em;
    }`,

    `.ui.footer.segment {
      margin: 5em 0em 0em;
      padding: 5em 0em;`,

    `#sign{
        position: absolute;
        top: 8px;
        right: 16px;
        font-size: 18px;
        }`,

    `#menu{
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 18px;
        }`,

    `/deep/ page-home div.scroll-content{
        padding-top: 0px !important;
      }`,
  ]
})
export class HomePage {//implements OnInit {

  //submitResponse:number=0;
//   bulkId: string;
//   //testId:string;
//   uploadDate: string;
//   executionDate: string;
//   numberOfTransactions: string;
//   totalAmount: string;
//   options = {
//     year: "numeric", month: "short",
//     day: "numeric"
//   };
// lala:string;
  constructor(private http: Http) { }

  // ngOnInit(): void {
  //   this.lala = "lalalala"


  //   this.http.get('https://service-payments.azurewebsites.net/bulks/search/is-new-requests?companyId=USACUGYMACTIVE&status=Uploaded')
  //     .map(res => { return res.json() })
  //     .subscribe(
  //     data => {
  //       this.uploadDate = new Date(data._embedded.bulks[0].uploadDate).toLocaleDateString('en-US', this.options);
  //       this.bulkId = data._embedded.bulks[0].id;
  //       this.executionDate = data._embedded.bulks[0].executionDate;
  //       this.numberOfTransactions = data._embedded.bulks[0].numberOfTransactions.toString();
  //       this.totalAmount = data._embedded.bulks[0].totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  //     },

  //   );
  // }
}
