import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

products: any = [];
 constructor(public navCtrl: NavController, firestore: AngularFirestore) {
	 
	const config = firestore.collection<Product>('/products'); 
	this.products = config.valueChanges();
 }

}
