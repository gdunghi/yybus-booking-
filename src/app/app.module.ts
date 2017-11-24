import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BusesPage } from '../pages/buses/buses';
import {InfoPage} from '../pages/info/info';
import {BookPage} from '../pages/book/book';
import {TicketsPage} from '../pages/tickets/tickets';
import {FeedbackPage} from '../pages/feedback/feedback';
import {AccountPage} from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPage } from '../pages/forgot/forgot';
import { ReschedulePage } from '../pages/reschedule/reschedule';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeserviceProvider } from '../providers/homeservice/homeservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BusesPage,
    InfoPage,
    BookPage,
    TicketsPage,
    FeedbackPage,
    AccountPage,
    LoginPage,
    SignupPage,
    ForgotPage,
    ReschedulePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BusesPage,
    InfoPage,
    BookPage,
    TicketsPage,
    FeedbackPage,
    AccountPage,
    LoginPage,
    SignupPage,
    ForgotPage,
    ReschedulePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeserviceProvider
  ]
})
export class AppModule {}
