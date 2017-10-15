import { Component } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Bulk } from '../bulk/bulk';


@Component({
  selector: 'usersTable',
  templateUrl: 'usersTable.html',
  styles: [
    ``,
  ]
})
export class UsersTable {
status: string;


  constructor(private http: Http) {


  }

  // getStatus(){


  // }

}
