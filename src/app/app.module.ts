import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FoodsPage } from '../pages/foods/foods';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { NutrientsPage } from '../pages/nutrients/nutrients';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NdbFoodsProvider } from '../providers/ndb-foods/ndb-foods';

@NgModule({
  declarations: [
    MyApp,
    FoodsPage,
    ItemDetailsPage,
    NutrientsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FoodsPage,
    ItemDetailsPage,
    NutrientsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NdbFoodsProvider
  ]
})
export class AppModule {}
