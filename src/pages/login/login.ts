import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { HomeserviceProvider } from '../../providers/homeservice/homeservice';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { ForgotPage } from '../forgot/forgot';

export class User {
  username: string;
  password: string;
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
      HomeserviceProvider
    ]
})
export class LoginPage {

  user: User = {
    username: '',
    password: ''
  }
  loader: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public alertCtrl: AlertController,
              public service: HomeserviceProvider, public toastCtrl: ToastController) {
    

  }

  
  
  
  
  doLogin(){
    let loda = this.loadingCtrl.create({
      content: 'Signing in....',
    });
    loda.present().then(()=>{
      this.login();
      loda.dismiss();
    });
  }
  login() {
        this.service.getFunctions(this.user)
                    .subscribe(
                        datas => {
                              if(datas.result){
                                
                                  this.navCtrl.setRoot(HomePage, {
                                      customer: datas.dados.id
                                  })
                                  
                                  this.presentToast();
                              }else{ 
                              
                              this.showAlert(datas.msg);
                              
                              
                              }
        });

    }

    showAlert(mes) {
    let alert = this.alertCtrl.create({
      title: mes,
      subTitle: 'Wrong credentials',
      buttons: ['OK']
    });
    alert.present();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Welcome'+" "+ this.user.username,
      duration: 3000
    });
    toast.present();
  }
  signUp(){
    this.navCtrl.push(SignupPage);
  }

  forgot()
  {
    this.navCtrl.push(ForgotPage);
  }

}