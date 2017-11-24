import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
	public customer: any;
	private baseURI     : string  = "http://localhost/";
	public tickets : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewWillEnter()
     {
         this.customer = this.navParams.get('customer');
        this.select(this.customer);
        
     }

  select(customer_id)
   {
      let body   : string   = "key=select&recordID=" + customer_id ,
          type    : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any     = new Headers({ 'Content-Type': type}),
          options: any      = new RequestOptions({ headers: headers }),
          url    : any     = this.baseURI + "api-yy/manage.php";

      this.http.post(url, body, options)
      .map(res => res.json())
      .subscribe(data =>
      {
         
         this.tickets = data;

         
      });
   }

}
