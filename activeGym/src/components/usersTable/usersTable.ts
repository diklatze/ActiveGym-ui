import { Component } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import {HelpService} from '../../services/help.services';
import { OnInit } from '@angular/core';

@Component({
  selector: 'usersTable',
  providers: [HelpService],
  templateUrl: 'usersTable.html',
  styles: [
    ``,
  ]
})
export class UsersTable{
  
 id:string;

  constructor(private http: Http, public helpService:HelpService) {}
getID(){
  this.id =this.helpService.gethelpServiceId();
}

}