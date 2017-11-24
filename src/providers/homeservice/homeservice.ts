import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import 'rxjs/add/operator/map';


@Injectable()
export class HomeserviceProvider {

  constructor(public http: Http) {

  };

  getFunctions(user) {
    let urlDest = "http://localhost/api-yy/login.php?username=" + user.username + "&password=" + user.password;
    return this.http.get(urlDest)
              .map( (res:Response) => res.json());
  }

}
