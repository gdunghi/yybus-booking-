import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {InfoPage} from '../info/info';
/**
 * Generated class for the BusesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buses',
  templateUrl: 'buses.html',
})
export class BusesPage {
	public items : any = [];
  public customer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : Http) {
  }

  	ionViewWillEnter()
   {
      this.load();
   }

  load()
   {
      this.http.get('http://localhost/api-yy/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }

   bus(item)
   {
     this.customer = this.navParams.get('customer');
   	 this.navCtrl.push(InfoPage, {bus: item, customer: this.customer});
   }

}
