import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BookPage} from '../book/book';



@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
	public bus: any;
  public customer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.bus = navParams.get('bus');
  }

  book(bus, route)
  {
  	this.bus = this.navParams.get('bus');
    this.customer = this.navParams.get('customer');
  	this.navCtrl.push(BookPage, {bus: this.bus, customer: this.customer, route: route});
  }


}
