import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()

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

export class HelpService {

    categoriesStatus: catagory[];
    helpServiceId : string;
    constructor() { }

    


}



