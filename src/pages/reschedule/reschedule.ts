import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ReschedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-reschedule',
  templateUrl: 'reschedule.html',
})
export class ReschedulePage {
	public items: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewWillEnter()
   {
      this.load();
   }

  load()
   {
      this.http.get('http://localhost/api-yy/reschedule.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }


}
