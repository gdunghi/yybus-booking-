import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BusesPage } from '../buses/buses';
import {TicketsPage} from '../tickets/tickets';
import {FeedbackPage} from '../feedback/feedback';
import {AccountPage} from '../account/account';
import { ReschedulePage } from '../reschedule/reschedule';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public customer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  buses(){
    this.customer = this.navParams.get('customer');
  	this.navCtrl.push(BusesPage, {customer: this.customer});
  }
  ticket(){
    this.customer = this.navParams.get('customer');
  	this.navCtrl.push(TicketsPage, {customer: this.customer});
  }
  feedback(){
    this.customer = this.navParams.get('customer');
  	this.navCtrl.push(FeedbackPage, {customer: this.customer});
  }
  settings()
  {
  	this.navCtrl.push(AccountPage);
  }
  reschedule()
  {
    this.navCtrl.push(ReschedulePage);
  }

}
