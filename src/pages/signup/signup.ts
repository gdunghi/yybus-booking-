import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
	public form : FormGroup;
	private baseURI     : string  = "http://localhost/";
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  					public fb: FormBuilder, public http: Http, public toast: ToastController) {

  	this.form = fb.group({
  		'fname' : [""],
  		'lname' : [""],
  		'email' : [""],
  		'phone' : [""],
  
  		'address' : [""],
  		'city'	: [""],
  		
  		'username' : [""],
  		'password' : [""],
  		'gender' : [""],
  	});
  }

  createEntry(fname, lname, phone, gender, address, city, email, username, password)
   {
      let body   : string   = "key=create&lname=" + fname + "&lname=" + lname + "&email=" + email
                               + "&address=" + address + "&city=" + city + "&contact=" + phone + "&username=" + username
                               + "&password=" + password + "&gender=" + gender,
          type    : string   = "application/x-www-form-urlencoded; charset=UTF-8",
          headers: any     = new Headers({ 'Content-Type': type}),
          options: any      = new RequestOptions({ headers: headers }),
          url    : any     = this.baseURI + "api-yy/signup.php";

      this.http.post(url, body, options)
      .subscribe((data) =>
      {
         // If the request was successful notify the user
         if(data.status === 200)
         {
            //this.hideForm    = true;
            this.sendNotification(`Sign up was successfull`);
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

   signUp()
   {
      let fname       : string  = this.form.controls["fname"].value,
          lname       : string  = this.form.controls["lname"].value,
          phone       : string  = this.form.controls["phone"].value,
          gender       : string  = this.form.controls["gender"].value,
          address       : string  = this.form.controls["address"].value,
          city       : string  = this.form.controls["city"].value,
          email       : string  = this.form.controls["email"].value,
          username       : string  = this.form.controls["username"].value,
          password  : string   = this.form.controls["password"].value;
         

      
      
         this.createEntry(fname, lname, phone, gender, address, city, email, username, password);
     
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
