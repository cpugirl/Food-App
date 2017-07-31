import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Foods } from '../../models/foods'
import { NdbFoodsProvider } from '../../providers/ndb-foods/ndb-foods';
/**
 * Generated class for the FoodsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foods',
  templateUrl: 'foods.html',
})
export class FoodsPage {
	food_list:Foods[];
 	name:string='Pritam';
  constructor(public navCtrl: NavController,private ndb_food_provider: NdbFoodsProvider) {
      ndb_food_provider.load().subscribe(food_list => {
      console.log(food_list)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodsPage');
  }

}
