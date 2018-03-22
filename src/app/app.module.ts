import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';



export const config = {
    apiKey: "AIzaSyCOXJG51GjUfHc1-q3d1A-0jpJcUMDKLz4",
    authDomain: "firestore-poc-demo.firebaseapp.com",
    databaseURL: "https://firestore-poc-demo.firebaseio.com",
    projectId: "firestore-poc-demo",
    storageBucket: "",
    messagingSenderId: "445350581690"
  };

@NgModule({
  
declarations: [
    MyApp,
    HomePage
  ],
  
imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule  ],
  
bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  
providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
