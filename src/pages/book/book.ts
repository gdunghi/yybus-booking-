import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';



@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  public bus: any;
  public form: FormGroup;
  private baseURI     : string  = "http://localhost/";
  public route: any;
  public customer: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  				public fb: FormBuilder, public http: Http, public toast: ToastController) {
  	this.bus = navParams.get('bus');
  	this.form = fb.group({
  		'seats' : [""],
  		'payment' : [""]
  	})
  }

  createEntry(seats, payment)
   {
   		this.bus = this.navParams.get('bus');
   		this.route = this.navParams.get('route');
   		this.customer = this.navParams.get('customer');
      let body   : string   = "key=create&seats=" + seats + "&payment=" + payment + "&route=" + this.route
      							+ "&customer=" + this.customer,
          type    : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any     = new Headers({ 'Content-Type': type}),
          options: any      = new RequestOptions({ headers: headers }),
          url    : any     = this.baseURI + "api-yy/manage.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            //this.hideForm    = true;
            this.sendNotification(`feedback sent successfully`);
            this.navCtrl.pop();
            console.log(body);
         }
         // Otherwise let 'em know anyway
         else
         {
            this.sendNotification('Something went wrong!');
         }
      });
   }

   book()
   {
      let seats       : string  = this.form.controls["seats"].value,
          payment       : string  = this.form.controls["payment"].value;
         

      
      
         this.createEntry(seats, payment);
     
   }



   
   



   // Manage notifying the user of the outcome
   // of remote operations
   sendNotification(message)  : void
   {
      let notification = this.toast.create({
          message     : message,
          duration     : 3000
      });
      notification.present();
   }

  

}
