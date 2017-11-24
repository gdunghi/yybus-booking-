import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder,  FormGroup } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the FeedbackPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
	public form: FormGroup;
	private baseURI     : string  = "http://localhost/";
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, 
  			public http: Http, public toast: ToastController) {

  	this.form = fb.group({
  		'name' : [""],
  		'message' : [""],
  	});
  }

  createEntry(name, message)
   {
      let body   : string   = "key=create&name=" + name + "&message=" + message,
          type    : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any     = new Headers({ 'Content-Type': type}),
          options: any      = new RequestOptions({ headers: headers }),
          url    : any     = this.baseURI + "api-yy/feedback.php";

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

   send()
   {
      let name       : string  = this.form.controls["name"].value,
          message       : string  = this.form.controls["message"].value;
         

      
      
         this.createEntry(name, message);
     
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
